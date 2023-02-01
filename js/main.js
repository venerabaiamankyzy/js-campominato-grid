/**********************************
 *                                *
 *              ON LOAD           *
 *                                *
 *********************************/

const gridEl = document.getElementById("grid");
const gridDimensionEl = 100;
generatedGrid(gridEl, gridDimensionEl);

/**********************************
 *                                *
 *              FUNCTIONS         *
 *                                *
 *********************************/

function generatedGrid(grid, dimension) {
  //numero dei square e per 100 volte sono aggiunti
  for (let i = 0; i < dimension; i++) {
    const numberOfSquare = i + 1;
    //genero un div
    const squareEl = document.createElement("div");

    // gli aggiungo la classe .square nella grid
    squareEl.classList.add("square");

    //gli aggiungo i numeri
    squareEl.innerHTML = numberOfSquare;

    // aggiungo un addeventlistener sul click che faccia il "toggle" della classe .active
    squareEl.addEventListener("click", function () {
      this.classList.toggle("active");
    });

    //lo aggiungo alla griglia
    grid.append(squareEl);
  }
}
