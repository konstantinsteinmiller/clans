from flask import Flask, request, jsonify
import numpy as np
import torch
import os

# Importiere unsere existierenden Klassen
from clans_engine import GameEngine
from clans_agent import Agent

# --- Konfiguration ---
MODEL_PATH = "clans_model.pth"
MCTS_SIMULATIONS_PER_MOVE = 100 # Höhere Anzahl für stärkere Züge im "Echtbetrieb"

# --- Initialisierung der KI (wird nur einmal beim Start des Servers ausgeführt) ---
print("Initialisiere den KI-Agenten...")
agent = Agent(GameEngine)
if os.path.exists(MODEL_PATH):
    try:
        # Lade das trainierte Modell. map_location stellt sicher, dass es auch auf CPU läuft, falls nötig.
        agent.model.load_state_dict(torch.load(MODEL_PATH, map_location=agent.device))
        print(f"Modell von '{MODEL_PATH}' erfolgreich geladen.")
    except Exception as e:
        print(f"FEHLER beim Laden des Modells: {e}. Der Agent spielt mit zufälliger Initialisierung.")
else:
    print(f"WARNUNG: Modelldatei '{MODEL_PATH}' nicht gefunden. Der Agent spielt mit zufälliger Initialisierung.")

# Setze das Modell in den Evaluationsmodus (wichtig für die Performance)
agent.model.eval()
print("KI-Agent ist bereit und wartet auf Anfragen.")
print("="*40)

# --- Flask App erstellen ---
app = Flask(__name__)

@app.route('/get_move', methods=['POST'])
def get_move():
    """
    Dieser Endpunkt empfängt einen Spielzustand als JSON,
    lässt die KI den besten Zug berechnen und gibt ihn zurück.
    """
    data = request.get_json()
    if not data:
        return jsonify({"error": "Keine Daten empfangen. Body muss JSON sein."}), 400

    try:
        # Erstelle eine temporäre GameEngine-Instanz nur für diesen einen Zug.
        engine = GameEngine(num_players=data['num_players'], verbose=False)
        
        # Setze den öffentlichen Zustand der Engine auf die übergebenen Werte
        engine.board = np.array(data['board'])
        engine.color_scores = {int(k): v for k, v in data['color_scores'].items()}
        engine.player_village_tokens = {int(k): v for k, v in data['player_village_tokens'].items()}
        engine.current_epoch = data['current_epoch']
        engine.villages_founded_in_epoch = data['villages_founded_in_epoch']
        engine.current_player_id = data['current_player_id']
        
        # KORREKTUR: Die MCTS-Simulation benötigt die "Sicht Gottes", um die Züge der Gegner
        # korrekt zu simulieren, da das NN auf diese Information trainiert wurde.
        engine.player_secret_clans = {int(k): v for k, v in data['player_secret_clans'].items()}

        # Lasse den Agenten den besten Zug berechnen
        # TEST: Temperature auf 1.0 setzen, um die KI kreativer zu machen und andere Züge zu sehen.
        move = agent.get_action(engine.copy(), simulations=MCTS_SIMULATIONS_PER_MOVE, temperature=0.0) 

        if move is None:
            return jsonify({"error": "Keine legalen Züge in diesem Zustand möglich."}), 400
            
        return jsonify({"move": list(move)})

    except KeyError as e:
        # Die str() Konvertierung stellt sicher, dass der Schlüssel korrekt als String angezeigt wird.
        return jsonify({"error": f"Fehlender Schlüssel in den JSON-Daten oder im internen Zustand: {str(e)}"}), 400
    except Exception as e:
        print(f"Ein interner Fehler ist aufgetreten: {e}")
        return jsonify({"error": "Ein interner Serverfehler ist aufgetreten."}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


