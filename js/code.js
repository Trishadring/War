console.log("script is loaded")
//constant elements
const suits = ['h', 'c', 'd', "s"];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const deck = [];
const values = [
  {
    name: 'A',
    value: 14
  },
  {
    name:'A',
    value: 14
  },
  {
    name:'K',
    value : 13
  },
  { 
    name:'Q',
    value:12
  },
  { name:'J',
    value:11
  },
  {
    name: '10',
    value:10
  },
  {
    name:'09',
    value: 9
  },
  { 
    name:'08',
    value: 8
  },
  { 
    name:'07',
    value: 7
  },
  { 
    name:'06',
    value: 6
  },
  { 
    name:'05',
    value: 5
  },
  { 
    name:'04',
    value: 4
  },
  { 
    name:'03',
    value:3
  },
  { 
    name:'02',
    value:2
  },
]


//variables
let p1Deck = [];
let p2Deck = [];
let battleArena = [];
let tieCardHolder =[];
let winner;
let roundWinner;

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
  clearField(); // clear the classes from the page that make the cards
  makeDeck(); // create the deck of cards
  suffleDeck(deck); // randomize the deck
  dealCards(); // give each player 26 cards
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
  p1CardsLeft.innerText = `P1 has ${p1Deck.length} Cards Left`;
  p2CardsLeft.innerText = `P2 has ${p2Deck.length} Cards Left`;
}

function findRoundWinner() {
  let p1card = battleArena[0].slice(1);
  let p2card = battleArena[1].slice(1);
  let p1cardValue = values.find(x => x.name === p1card ).value;
  let p2cardValue = values.find(x => x.name === p2card ).value;
  if (p1cardValue < p2cardValue){
    roundWinner = 'Player 2';
    p2Deck.push(battleArena[0], battleArena[1]);
  } else if (p1cardValue > p2cardValue){
    roundWinner = 'Player 1';
    p1Deck.push(battleArena[0], battleArena[1]);
  } else {
    roundWinner = 'Tie'
  }
}

function updateWinnerMessage(){
  msgEl.innerHTML = `${roundWinner} Wins the round`
}

function draw(){
  clearField(); // clear the classes from the page that make the cards
  battleCards(); //move cards from players deck to battle arena
  findRoundWinner(); // use value to find which card is larger
  render();
}

function render(){
  showCards(battleArena); // update the dom to show the cards drawn
  updateWinnerMessage(); //update msg to say which player one the round
  updateCardsLeft(); //update text for how many cards left each player has
};

init();

