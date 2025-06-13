interface GameObject {
  x: number
  y: number
  width: number
  height: number
}

// const CollisionTypes = ['rect', 'circle', 'polygon']
// export type CollisionType = (typeof ELEMENTS)[keyof typeof ELEMENTS]
// type CollisionType = 'rect' | 'circle' | 'polygon'
export function useCollisionDetection(/*type: CollisionType = 'rect'*/) {
  const checkCollision = (obj1: GameObject, obj2: GameObject): boolean => {
    return (
      obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y
    )
  }

  return {
    checkCollision,
  }
}
