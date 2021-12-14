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

const players = {
  '1': {
    name: 'Player One',
    deck: [],
  },
  '0': {
    name: 'Player Two',
    deck: [],
  },
};


//variables
let battleArena;
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
  battleArena = [];
  clearField(); // clear the classes from the page that make the cards
  makeDeck(); // create the deck of cards
  suffleDeck(deck); // randomize the deck
  dealCards(); // give each player 26 cards
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
  for(let i=0; i<52; i++){ //for each 52 cards
    let tempCard = deck[i]; //temp card start position
    let randomIndex = Math.floor(Math.random() * 52); // find random card to switch with
    deck[i] = deck[randomIndex];  //switch the cards
    deck[randomIndex] = tempCard; 
  }
}

function dealCards(){
  players[1].deck = deck.splice(0,26); //give p1 half the deck
  players[0].deck = deck.splice(0,26); //give p2 half the deck
}

function clearField(){ //starting code for cards
  document.getElementById("battle-arena").innerHTML =
    `<div id="battle-arena">
      <div id="p1-card" class="card xlarge shadow outline"></div>
      <div id="p2-card" class="card xlarge shadow outline"></div>
   </div>`;
}

function battleCards(){
  let p1 = players[1].deck.splice(0, 1); //get the first cards 
  let p2 = players[0].deck.splice(0, 1);
  battleArena.push(p1[0],p2[0]); //add to battle arena array
}

function showCards(c1, c2){ //update cards on dom
  document.getElementById("battle-arena").innerHTML =
    `<div id="battle-arena">
      <div id="p1-card" class="card xlarge shadow ${c1}"></div>
      <div id="p2-card" class="card xlarge shadow ${c2}"></div>
   </div>`;
};

function updateCardsLeft(){
  p1CardsLeft.innerText = `P1 has ${players[1].deck.length} Cards Left`;
  p2CardsLeft.innerText = `P2 has ${players[0].deck.length} Cards Left`;
}

function findValue(card){
  let number = card.slice(1); //cut off the suit to find the value
  return values.find(x => x.name === number).value;
}

function findRoundWinner(p1Card,p2Card) {
  if (p1Card === p2Card ){
    war();
    console.log('there was a tie');
  //   console.log(players[1].deck);
  // console.log(players[0].deck);
  } else if (p1Card < p2Card){
    roundWinner = 'Player 2 Wins the round';
    giveVictor(players[0].deck);
  //   console.log(players[1].deck);
  // console.log(players[0].deck);
  } else if (p1Card > p2Card){
    roundWinner = 'Player 1 Wins the round';
    giveVictor(players[1].deck);
  //   console.log(players[1].deck);
  // console.log(players[0].deck);
  }
}

function updateWinnerMessage(){
  msgEl.innerHTML = `${roundWinner}`
}

function checkIfGameOver(){
  if (players[1].deck.length === 0){
    msgEl.innerHTML = `Player 2 Wins the Game`
    dealEl.disabled = true;
  } else if (players[0].deck.length === 0){
    msgEl.innerHTML = `Player 2 Wins the Game`
    dealEl.disabled = true;
  }
}

function giveVictor(victor){
  let length = victor.length;
  battleArena.forEach((card) => victor.splice(length, 0, card));
  battleArena.splice(0);
}

function war(){
  battleCards();
  battleCards();
  setTimeout(function(){
    clearField();
    showCards(battleArena[4],battleArena[5]);
    findRoundWinner(findValue(battleArena[4]), findValue(battleArena[5]))
 }, 1000);
  console.log(findValue(battleArena[4]));
  console.log(findValue(battleArena[5]));
}

function draw(){
  clearField(); // clear the classes from the page that make the cards
  battleCards(); //move cards from players deck to battle arena
  showCards(battleArena[0],battleArena[1] ); // update the dom to show the cards drawn
  findRoundWinner(findValue(battleArena[0]), findValue(battleArena[1])); // use value to find which card is larger
  msgEl.innerHTML = ``
  render();
}

function render(){
    updateWinnerMessage(); //update msg to say which player one the round
    updateCardsLeft(); //update text for how many cards left each player has
  checkIfGameOver(); //check if someone one the game
};

init();

