console.log("script is loaded")
//constant elements
const suits = ['h', 'c', 'd', "s"];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const deck = [];
// const values = {
//   'A': 14,
//   'K': 13,
//   'Q': 12,
//   'J': 11,
//   10: 10,
//   9: 9,
//   8: 8,
//   7: 7,
//   6: 6,
//   5: 5,
//   4: 4,
//   2: 2,
// }


//variables
let p1Deck = [];
let p2Deck = [];
let battleArena = [];
let winner;

///dom elements
const dealEl = document.querySelector("#deal");
const startEl = document.querySelector('#start');
const msgEl = document.querySelector('#msg');
const p1Card = document.querySelector('#p1-card');
const p2Card = document.querySelector('#p2-card');
const p1CardsLeft = document.querySelector('#p1-cards-Left');
const p2CardsLeft = document.querySelector('#p2-cards-Left');

//event listeniers

dealEl.addEventListener('click', draw);
startEl.addEventListener('click', init);

/// functions

function init(){
  clearField();
  makeDeck();
  suffleDeck(deck);
  dealCards();
  battleCards();
};


//starting game 

function makeDeck(){
  for(let i = 0; i < 4; i++ ){
    for(let r = 0; r < 13; r++ ){
      deck.push(suits[i] + ranks[r])
    }
  }
}

function suffleDeck(deck){
  for(let i=0; i<52; i++){
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
}

function dealCards(){
  p1Deck = deck.splice(0,26);
  p2Deck = deck.splice(0,26);
}

function clearField(){
  document.getElementById("battle-arena").innerHTML =
    `<div id="battle-arena">
      <div id="p1-card" class="card xlarge shadow outline"></div>
      <div id="p2-card" class="card xlarge shadow outline"></div>
   </div>`;
}

function battleCards(){
  let p1 = p1Deck.splice(0, 1);
  let p2 = p2Deck.splice(0, 1);
  return battleArena = p1.concat(p2);
}

function showCards(){
  document.getElementById("battle-arena").innerHTML =
    `<div id="battle-arena">
      <div id="p1-card" class="card xlarge shadow ${battleArena[0]}"></div>
      <div id="p2-card" class="card xlarge shadow ${battleArena[1]}"></div>
   </div>`;
};

function updateCardsLeft(){
  p1CardsLeft.innerText = `${p1Deck.length} Cards Left`;
  p2CardsLeft.innerText = `${p2Deck.length} Cards Left`;

}
function draw(){
  clearField();
  battleCards();
  showCards(battleArena);
  updateCardsLeft();
}

function render(){
  //showCards(battleArena);
};

init();
render();

