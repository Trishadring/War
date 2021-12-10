console.log("script is loaded")
//constant elements
const suits = ['H', 'C', 'D', "S"];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
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


/// functions

// init();
// render();
// shuffle();
// dealHands();
// showCards();
// roundWinner();
// renderMessage();

function makeDeck(){
  for(let i =0; i < 4; i++ ){
    for(let r=0; r < 13; r++ ){
      deck.push(ranks[r] + suits[i])
    }
  }
  
}

makeDeck();

console.log(deck);

