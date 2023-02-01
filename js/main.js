/**********************************
 *                                *
 *              ON LOAD           *
 *                                *
 *********************************/

const gridEl = document.getElementById("grid");
generatedGrid(gridEl);

/**********************************
 *                                *
 *              FUNCTIONS         *
 *                                *
 *********************************/

function generatedGrid(grid) {
  for (let i = 0; i < 100; i++) {
    const squareEl = document.createElement("div");
    squareEl.classList.add("square");
    gridEl.append(squareEl);
  }
}
