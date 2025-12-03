<script setup lang="ts"></script>

<template lang="pug">
  // Far Background (slowest)
  //img.background-layer.absolute.top-0.left-0.w-full.h-full.z-0(
  //  src="/images/bg/game-bg.jpg" alt="Game Field Background"
  //)
  div.game-field.z-index-10.w-full.block.border-4.border-green-600(class="h-[370px]")
    svg.w-full.h-full(xmlns="http://www.w3.org/2000/svg" width="1512" height="1184" fill="none" viewBox="0 0 1512 1184")
      <g class="board">
      <g class="country-1">
        <path data-cell-id="0" stroke="#000000" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M186.5 2H2v149.5l192.5-91-8-58.5Z" class="Rectangle 2"/>
        <path data-cell-id="1" stroke="#000000" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m194.5 60.5-8-58.5H380l-12 136.5-118.5 8.5-55-86.5Z" class="Rectangle 6"/>
        <path data-cell-id="2" stroke="#000000" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m2 151.5 192.5-91 55 86.5-84 71L2 151.5Z" class="Rectangle 3"/>
        <path data-cell-id="3" stroke="#000000" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 151.5V326l155 2.5 8.5-110.5L2 151.5Z" class="Rectangle 4"/>
        <path data-cell-id="4" stroke="#000000" fill="transparent" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m249.5 147-84 71-8.5 110.5 116 12L348 218l20-79.5-118.5 8.5Z" class="Rectangle 5"/>
      </g>

      <g class="country-2">
        <path data-cell-id="5" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m380 2-12 136.5-20 79.5 106.5 41 18.5-55 89-21.5 18-50.5L546.5 2H380Z" class="Rectangle 5"/>
        <path data-cell-id="6" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M546.5 2 580 132l151.5 8.5V2h-185Z" class="Rectangle 4"/>
        <path data-cell-id="7" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M731.5 2v138.5L827 160l120-75V2H731.5Z" class="Rectangle 3"/>
        <path data-cell-id="8" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M970.5 160 947 85V2h102.5l34.5 126.5 34.5 10 34 57.5-107 45.5-3-12-8-2.5 5-19-14.5-10-10.5 4v-9l-19-7 12-6-4-8-17.5-10.5-7.5-9-8 7.5Z" class="Rectangle 2"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m793.5 292-124-49.5-5-21-36-6-17.5 3-8.5-10-22.5 7-18-33 18-50.5 151.5 8.5 95.089 19.5L947 85l23.5 75-18.5 14.5-2-7-11.5 2-13.5-2-14.5 9-2.5 7 5.5 9-9 4-2 7H886l-9 10V232l-6 15 6 10.5-83.5 34.5Z" class="Rectangle 6"/>
      </g>

      <g class="country-3">
        <path data-cell-id="10" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1298.5 58.5-82 63-49 8.5-49 8.5-34.12-10L1049.5 2H1293l5.5 56.5Z" class="Rectangle 6"/>
        <path data-cell-id="11" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1510 179V2h-217l5.5 56.5L1451 163l59 16Z" class="Rectangle 4"/>
        <path data-cell-id="12" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1451 163-179 41.5-55.5-83 82-63L1451 163Z" class="Rectangle 3"/>
        <path data-cell-id="13" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1118.5 138.5 34 57.5L1272 321.5l17 12-6.5 13 14 12.5 9-7.5 25 7.5v-12.5h16l-6-11.5 16-1.5 6.5-16.5v-9l-10.5-11.5 4-27.5-32.5-7 2.5-6.5-37.5-21-17-30-55.5-83-49 8.5-49 8.5Z" class="Rectangle 2"/>
        <path data-cell-id="14" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1510 331-147-14v-9l-10.5-11.5 4-27.5-32.5-7 2.5-6.5-37.5-21-17-30 179-41.5 59 16v152Z" class="Rectangle 5"/>
      </g>

      <g class="country-4">
        <path data-cell-id="15" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m157 328.5 116 12 11.5 39-8 6.5 2.5 13.5-16 19-5-7-22 7-7.5 16-24 23-47.5 18-155-51V326l155 2.5Z" class="Rectangle 2"/>
        <path data-cell-id="16" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m2 424.5 155 51 8.5 104L2 564.5v-140Z" class="Rectangle 4"/>
        <path data-cell-id="17" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m157 475.5 47.5-18 35 25.5-9.5 5 2 22.5 15-3.5 10.5 10.5 20-13L292 524h17.5l13-4.5 43 55-33 46.5-18-6.5L308 626l-15-14-16 11.5 3 10-22.5 13-19-13-42.5 16 3.5 18-6 17-75-9 47-96-8.5-104Z" class="Rectangle 3"/>
        <path data-cell-id="18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m2 564.5 163.5 15-47 96L2 734.5v-170Z" class="Rectangle 5"/>
        <path data-cell-id="19" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m193.5 684.5-75-9L2 734.5v95l115.5-23.1 69.5-13.9 9.5-60-9.5-7.5 6.5-40.5Z" class="Rectangle 6"/>
      </g>

      <g class="country-5">
        <path data-cell-id="20" fill="#000000" fill-rule="evenodd" d="m450.913 254.913 21.714 54.752 62.948 40.148a2 2 0 0 1 .304 3.136l-102.5 97.5a2.001 2.001 0 0 1-1.789.508l-71.5-15A2 2 0 0 1 358.5 434v-41.213l-18.833-20.178-6.067 8.091a2.001 2.001 0 0 1-1.714.797l-53.781-2.81s-2.602-6.858-2.171-9.79c.756-5.132-1.16-8.773-4.299-12.163-3.456-3.732-5.907-7.534-3.923-13.026 1.77-4.633 7.779-9.285 10.563-11.032 2.464-2.761 6.685-3.946 10.12-5.835 2.566-1.412 6.056-2.198 7.504-4.36 2.755-4.113 6.244-6.143 10.783-7.315 2.301-.594 4.393-2.004 6.63-3.069-5.012-7.574-4.132-11.145 3.508-15.943 4.91-3.084 5.095-3.89 1.608-8.797-2.81-3.954-3.055-8.087-.72-12.208 1.443-2.547 1.453-4.328-.723-6.584-3.701-3.835-3.728-8.335-1.057-12.87.845-1.435 1.96-2.743 2.604-4.258 1.627-3.826 3.968-6.937 8.968-4.937-.5-5.5-1.965-8.782-3.027-12.863-.482-1.85-.958-2.831-.661-5.641C324.5 221.5 331 214.502 338.5 214c2.2-.147 3.09-.354 4.517-.65 3.214 0 5.789 3.047 6.674 4.57 1.055 3.229 2.947 6.548 7.326 6.342 6.981-.327 13.967-.61 20.937-1.095 6.23-.434 9.198 2.667 8.56 8.895-.177 1.733.514 3.555.807 5.336 1.673-.696 3.332-1.942 5.022-1.987 5.468-.145 10.955.017 16.417.35 1.893.116 3.712 1.449 5.607 1.571 3.759.243 6.116 1.987 7.713 5.331 2.809 5.878 5.073 6.751 11.587 4.875 6.427-1.851 14.256 1.593 17.246 7.375Zm-119.87 122.528-48.469-1.075c-.678-2.897-1.9-5.476-1.743-7.968.394-6.247-1.097-11.394-5.955-15.628-2.666-2.322-4.43-6.229-1.85-8.911l.303-.316c4.28-4.452 9.009-9.372 14.524-11.373C302 328.5 299.984 323 302 321.5c3.157-2.349 7 0 13.601-6.509.131-.048.195-.264.304-.389 2.081-2.379 3.116-4.773.27-7.355-2.219-2.012-1.606-3.709.639-5.229a134.462 134.462 0 0 0 4.874-3.487c4.088-3.044 5.123-7.93 1.773-11.692-3.229-3.625-3.398-6.959-1.007-10.838 1.999-3.242 1.612-6.047-.872-9.096-5.409-6.642-2.31-13.677 6.329-15.182 1.228-.214 2.589-.723 3.272-2.108.317-3.615 1.013-11.008-1.182-15.097-2.658-4.952-1.679-7.642 1.655-10.753C333.943 221.631 335 219 339 218c2.5-.5 5.266.942 6.058 2.442 4.037 7.648 10.525 8.718 18.119 7.96 3.631-.363 7.321-.096 10.977-.258l.084-.004c6.354-.282 6.554-.291 6.267 6.074-.177 3.92 1.533 6.338 4.677 8.061 3.199 1.753 5.923.786 8.756-1.264 1.776-1.284 4.61-2.938 6.184-2.342 6.805 2.577 14.854 2.516 19.897 9.145 2.785 3.662 6.799 6.04 11.368 4.496 6.554-2.215 11.494-.579 15.71 3.828l22.039 55.587c.154.396.43.733.789.962l61.345 39.125-99.889 95.015-68.881-14.451V392a2 2 0 0 0-.538-1.364l-21-22.5a1.998 1.998 0 0 0-2.92-.005l-.142.169-6.857 9.141Z" class="Vector" clip-rule="evenodd"/>
        <path data-cell-id="21" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m632 436 68-10 3-23-10.5-15 21-9 3-11 21-6.5H759l34.5-69.5-124-49.5-15 22.5-32 9v18l-26 16-26.5 3-4 31.5 66 93.5Z" class="Rectangle 2"/>
        <path data-cell-id="22" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M514.5 480.5 632 436l-66-93.5-31.5 9L432 449l82.5 31.5Z" class="Rectangle 3"/>
        <path data-cell-id="23" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m435.5 610.5-70-36-43-55L340 510l-3-11.5 19-37-4.5-18.5 9-9 71.5 15 82.5 31.5v55l-13-2-8.5 7-11.5 7.5 8 33-17.5 8.5-20 5-16.5 16Z" class="Rectangle 4"/>
        <path data-cell-id="24" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m694.5 558-101 28-9.5-12.5-18.5-6.5-7-22.5-12-4 5-8.5-12-5-25 8.5v-55L632 436l68-10v7.5l7.5 6.5-10.5 8.5-6.5 21 25 16H731L694.5 558Z" class="Rectangle 5"/>
      </g>

      <g class="country-6">
        <path data-cell-id="25" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m759 361.5 34.5-69.5 83.5-34.5 7.5 6 3 16.5 9.5 6h9.5l25 11.5 4-9 9.5 4.5 14-4.5 15.5 7.5 16 53.5L905 395l-57.5-3.5-11.5-7-10.5-8L809 369l-10.5 7.5H788l2.5-6-6-6H772l-13-3Z" class="Rectangle 3"/>
        <path data-cell-id="26" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1095.5 425 61.5 3-4-14 9-19-3.5-6.5 8-9-9.5-14.5 11.5-7 14.5 17 12 2-5-22 27-2.5 31 9 24-40L1152.5 196l-107 45.5-2.5 7.5-15.5 13.5-16.5 2 9.5 12.5-12.5 13.5h-17.5l-16 5.5 16 53.5 105 75.5Z" class="Rectangle 5"/>
        <path data-cell-id="27" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1034.5 537.5 61-112.5-105-75.5L905 395l21.5 92 7.5 2v16.75l8.5 7.25-4.5 11.5 19-3.5 20 7.5 5-4h33l1 10h12l6-7 .5 10Z" class="Rectangle 4"/>
        <path data-cell-id="28" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M757 598.5 694.5 558l36.5-72.5 14-5.5 5.5-6-4-7.5 16-8.5-4.5-15 7.5-23.5 5 13.5 10-4 1.5-9.5 15.5 1.5 5-3.5 22-2L828 405l16-3 3.5-10.5L905 395l21.5 92-5.5 8.5-14 2.5v17l-17.5 4.5L887 530l-24-4-4 7.5 4 6.5-30.5 8-8-13 3.5-9h-34.5l-10 25 4 16-30.5 31.5Z" class="Rectangle 2"/>
        <path data-cell-id="29" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1034.5 537.5 167 54 27.5-113-13.5-7-20-5.5H1180l-13 10.5-10-7.5-3.5-13 8.5-18.5-5-9.5-61.5-3-61 112.5Z" class="Rectangle 6"/>
      </g>

      <g class="country-7">
        <path data-cell-id="30" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1248 361.5 24-40 17 12-6.5 13 14 12.5 9-7.5 25 7.5v-12.5h16l-6-11.5 16-1.5 6.5-16.5 147 14v119.5l-80.5 28-87.5-60 4.5-12.5-16-10-23 14.5-14-4.5h-18l-3.5-10-29.5 2.5V377l5.5-15.5Z" class="Rectangle 2"/>
        <path data-cell-id="31" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1201.5 591.5V687s7.26 6.552 13 8.5c7.4 2.509 20 0 20 0s7.47-4.777 12.5-3c6.51 2.3 0 12 0 12l13.5 5.5 54-34 25-65.5 90-132-87.5-60s-8.32 22.916-20.5 30.5c-16.93 10.538-33.29-11.673-51-2.5-9.81 5.083-20.5 19.5-20.5 19.5h-10.5l-10.5 12.5-27.5 113Z" class="Rectangle 6"/>
        <path data-cell-id="32" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1510 450.5-80.5 28-90 132L1510 597V450.5Z" class="Rectangle 3"/>
        <path data-cell-id="33" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1510 762.5 1314.5 676l25-65.5L1510 597v165.5Z" class="Rectangle 4"/>
        <path data-cell-id="34" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1264.5 878.5-70-24.5 16.5-65c13.67 0 10.8 3.301 24 0s8.53-8.288 11-12.5c3.06-5.225 14.5-5.5 14.5-5.5l1.5-6.5s-14.72-5.052-16-13c-.81-5.005 6.44-8.37 3.5-12.5-1.67-2.349-6.5-3.5-6.5-3.5l17.5-25.5 54-34 195.5 86.5V841l-23.5-4.5-12.5 16-46-4.5-18.5-26.5-112.5 31-9 29-23.5-3Z" class="Rectangle 5"/>
      </g>

      <g class="country-12">
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1201.5 1024 55-80 148.5 22.5-2 104.5-75.5 25-126-72Z" class="Rectangle 2"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1256.5 944 8-65.5 23.5 3 9-29 112.5-31L1428 848l46 4.5 12.5-16 23.5 4.5v125.5h-105L1256.5 944Z" class="Rectangle 6"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1310.5 1182H1510V966.5h-105l-2 104.5-75.5 25-17 86Z" class="Rectangle 5"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1075 1182 2.5-143 124-15 126 72-17 86H1075Z" class="Rectangle 3"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1077.5 1039-7-169.5 124-15.5 70 24.5-8 65.5-55 80-124 15Z" class="Rectangle 2"/>
      </g>

      <g class="country-11">
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m519 1085.5-19-71 46.5-11.5 10.5 13 20-3.5 15.5 5 40.5 2 19-16.5 19 4 11-12.5 13.5 3.5 9.5-25 35-4.5 13.5-29V916l-8-16.5L751 851l83 44.5-7.5 20.5 7.5 8.5-9 12 20 9.5-18.5 3-9 19.5 15 1.5 10.5 18.5v78l-99.5 8-224.5 11Z" class="Rectangle 6"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M999.5 1182 843 1066.5v-78l17-2.5 8.5-12.5v9.5l11.5 11 11-11 6.5 7 10-7 11.5 3 9.5-6 2 14 9 5 15 9 6-6 12.5-1.5 8.5-17.5 14-3v-11l-12-10-2-8.5 14-16.5 5-10.5-8-17.5-9-9.5 87-27 7 169.5-2.5 143h-75.5Z" class="Rectangle 5"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m755 1182-11.5-107.5 99.5-8L999.5 1182H755Z" class="Rectangle 4"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m504 1182 15-96.5 224.5-11L755 1182H504Z" class="Rectangle 3"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m383 1042-5-89 96 33 3.5 17.5 22.5 11 19 71-15 96.5H388l-5-140Z" class="Rectangle 2"/>
      </g>

      <g class="country-10">
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m175 1100 84.5-78.5-95-106.5L49 1012l126 88Z" class="Rectangle 6"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M164.5 915 49 1012l-47-6.25V829.5l115.5-23.1 47 108.6Z" class="Rectangle 5"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 1182h185l-12-82-126-88-47-6.25V1182Z" class="Rectangle 4"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M259.5 1021.5 383 1042l5 140H187l-12-82 84.5-78.5Z" class="Rectangle 3"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M378 953 187 792.5l-69.5 13.9 47 108.6 95 106.5L383 1042l-5-89Z" class="Rectangle 2"/>
      </g>

      <g class="country-8">
      <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M378 953 187 792.5l9.5-60 24 11 29.5-14 32.5-4 3 9.5 26 17 8.5 14 21 3.5 47.5 46.5 194 53v71L539 953l-36.5-29-15-2.5-13.5 8-4.5 28 24 7L480 970l-6 16-96-33Z" class="Rectangle 6"/>
      <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M582.5 869v71l64.5 19 21-3v-14l8-5.5-8-10.5 8-13 19-13.5h50.5L751 851l-18-63.5-89-39.5h-56.5l-5 121Z" class="Rectangle 5"/>
      <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m341 769.5 47.5 46.5L506 720.5l38-74-14-5.5-15-1.5-25 17.5-18 3.5-9.5-3.5 2.5-16-11.5-6.5 9-12H437l-1.5-12-70-36-33 46.5 16 17.5v22l8 4 7-9.5 10.5 1 1.5-10.5H386l15.5 35.5-3.5 18-9.5 2.5v7.5l-13 5.5 6.5 17-4 8-21.5-21.5-15.5 51.5Z" class="Rectangle 4"/>
      <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m506 720.5 38-74 49.5-60.5 101-28 62.5 40.5-20.5 61L644 748h-56.5L506 720.5Z" class="Rectangle 3"/>
      <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m388.5 816 194 53 5-121-81.5-27.5L388.5 816Z" class="Rectangle 2"/>
      </g>
    
      <g class="country-9">
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m968 651 19.5-56 43-34 4-23.5 167 54V687s-13-2.5-22.5 0c0 0-8.36 4.524-8.5 9.5-.16 5.949 11.5 10 11.5 10l-14 2.5-4 6.5s-7.5 2.5-9 8.5 8.07 11.113 5.5 18c-2.57 6.904-9 5-14 10s0 9.5 0 9.5H1074L968 651Z" class="Rectangle 6"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M1074 761.5 922 790l-72.5-69L968 651l106 110.5Zm0 0h72.5" class="Rectangle 5"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m1070.5 869.5-87 27H967l-10 6-11-2-7.5-7.5 2-13.5-9.5-17-16.5-12L922 790l152-28.5h72.5l19 35.5s4.16.799 6.5-1c3.29-2.522 2.5-10.5 2.5-10.5l8.5-1.5s1.34-5.975 4-8.5c3-2.847 6.26-1.819 10-3.5 4.6-2.066 7.5-10.5 7.5-10.5V772l8.5 3.5-2 13.5-16.5 65-124 15.5Z" class="Rectangle 4"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m751 851-18-63.5 42.5-49.5 74-17 72.5 69-7.5 60.5L894 869l-5 18.5h-35l-20 8-83-44.5Z" class="Rectangle 3"/>
        <path data-cell-id="9" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m736.5 659.5 20.5-61 30.5-31.5 20.5 12.5 29.5 5.5v16l13.5 9 7-11.5 19.5 5.5 11-9 16 6 24.5-2.5 13-7.5 23 7.5 22.5-3.5-19.5 56-118.5 70-74 17-39-78.5Z" class="Rectangle 2"/>
      </g>
      </g>

</template>

<style scoped lang="sass"></style>
