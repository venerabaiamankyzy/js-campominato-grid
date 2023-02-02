// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console
// con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno :party_wizard: // Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio // Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
//Aggiungo uno screen senza e con bonus, ma potete realizzare la parte grafica a vostro gusto (dopo aver finito la parte logica!)

/**********************************
 *                                *
 *              ON LOAD           *
 *                                *
 *********************************/
const gridEl = document.getElementById("grid");
const gridButtonEl = document.getElementById("button-play");
const selectEl = document.getElementById("difficulty");

gridButtonEl.addEventListener("click", function () {
  const selectEl = document.getElementById("difficulty").value;
  let selectValue = 0;
  if (selectEl == "easy") {
    selectValue = 1;
  } else if (selectEl == "medium") {
    selectValue = 2;
  } else if (selectEl == "hard") {
    selectValue = 3;
  }
  generatedGrid(gridEl, selectValue);
});

/**********************************
 *                                *
 *              FUNCTIONS         *
 *                                *
 *********************************/

function generatedGrid(grid, difficulty) {
  gridEl.innerHTML = "";
  // STABILISCO LIVELLO DI DIFFICOLTA'
  let selectClasses;
  let dimension;
  if (difficulty == 1) {
    dimension = 100;
    selectClasses = "easy";
  } else if (difficulty == 2) {
    dimension = 81;
    selectClasses = "medium";
  } else if (difficulty == 3) {
    dimension = 49;
    selectClasses = "hard";
  }

  //numero dei square e per 100 volte sono aggiunti
  for (let i = 0; i < dimension; i++) {
    const numberOfSquare = i + 1;
    //genero un div
    const squareEl = document.createElement("div");

    // gli aggiungo la classe .square nella grid
    squareEl.classList.add("square", selectClasses);

    //gli aggiungo i numeri
    squareEl.innerHTML = numberOfSquare;

    // aggiungo un addeventlistener sul click che faccia il "toggle" della classe .active
    squareEl.addEventListener("click", function () {
      this.classList.toggle("active");
      console.log(this.innerHTML);
    });

    //lo aggiungo alla griglia
    grid.append(squareEl);
  }
}
