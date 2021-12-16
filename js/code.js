
//constant elements
const suits = ['h', 'c', 'd', 's']
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const deck = [];
const values = [{
    name: 'A',
    value: 14
  },
  {
    name: 'K',
    value: 13
  },
  { 
    name: 'Q',
    value: 12
  },
  { name: 'J',
    value: 11
  },
  {
    name: '10',
    value: 10
  },
  {
    name: '09',
    value: 9
  },
  { 
    name: '08',
    value: 8
  },
  { 
    name: '07',
    value: 7
  },
  { 
    name: '06',
    value: 6
  },
  { 
    name: '05',
    value: 5
  },
  { 
    name: '04',
    value: 4
  },
  { 
    name: '03',
    value: 3
  },
  { 
    name: '02',
    value: 2
  },
]

const players = {
  '1': {
    name: 'Player One',
    deck: [],
    wins: 0,
  },
  '0': {
    name: 'Player Two',
    deck: [],
    wins: 0,
  },
};


//variables
let battleArena;
let winner;
let roundWinner;
let rounds = 0;
let player1 = players[1];
let player2 = players[0];

///dom elements
const dealEl = document.getElementById("deal");
const startEl = document.getElementById('start');
const msgEl = document.getElementById('msg');
const p1Card = document.getElementById('p1-card');
const p2Card = document.getElementById('p2-card');
const p1CardsLeft = document.getElementById('p1-cards-Left');
const p2CardsLeft = document.getElementById('p2-cards-Left');
const p1WinsEl = document.getElementById('p1-wins');
const p2WinsEl = document.getElementById('p2-wins');
const roundsEl = document.getElementById('rounds');

//event listeniers
dealEl.addEventListener('click', draw);
startEl.addEventListener('click', init);

/// functions
function init() {
  battleArena = [];
  rounds = 0;
  player1.wins = 0;
  player2.wins = 0;
  msgEl.innerHTML = `Let's Play War!`
  p1WinsEl.innerText = player1.wins;
  p2WinsEl.innerText = player2.wins;
  roundsEl.innerText = rounds;
  clearField(); // clear the classes from the page that make the cards
  makeDeck(); // create the deck of cards
  suffleDeck(deck); // randomize the deck
  dealCards(); // give each player 26 cards
  dealEl.disabled = false; //unDisable the button
};

//starting game 
function makeDeck() {
  for (let i = 0; i < 4; i++) {
    for (let r = 0; r < 13; r++) {
      deck.push(suits[i] + ranks[r])
    }
  }
}

function suffleDeck(deck) {
  for (let i = 0; i < 52; i++) { //for each 52 cards
    let tempCard = deck[i]; //temp card start position
    let randomIndex = Math.floor(Math.random() * 52); // find random card to switch with
    deck[i] = deck[randomIndex];  //switch the cards
    deck[randomIndex] = tempCard; 
  }
}

function suffleDeckmini(deck) {
  let index = deck.length
  for (let i = 0; i < index; i++) { //shuffle the cards with the max being the index we found above
    let tempCard = deck[i]; //temp card start position
    let randomIndex = Math.floor(Math.random() * index); // find random card to switch with
    deck[i] = deck[randomIndex];  //switch the cards
    deck[randomIndex] = tempCard; 
  }
}

function dealCards() {
  player1.deck = deck.splice(0,24); //give p1 half the deck
  player2.deck = deck.splice(0,24); //give p2 half the deck
  // for presentation
  // player1.deck = deck.splice(0,7); //give p1 half the deck
  // player2.deck = deck.splice(0,7); //give p2 half the deck
}

function removeClasses(){
  p1Card.removeAttribute('class');
  p2Card.removeAttribute('class');
}

function clearField() { //starting code for cards
  removeClasses();
  p1Card.classList.add('card', 'shadow', 'outline');
  p2Card.classList.add('card', 'shadow', 'outline');
}

function drawCards() {
  let p1 = player1.deck.splice(0, 1); //get the first cards 
  let p2 = player2.deck.splice(0, 1);
  battleArena.push(p1[0], p2[0]); //add to battle arena array
}



function showCards(c1, c2) { //update cards on dom
  removeClasses();
  p1Card.classList.add('card', 'shadow', `${c1}`); //add back in basic classes and class to display a card
  p2Card.classList.add('card', 'shadow', `${c2}`);
};

function updateCardsLeft() {
  p1CardsLeft.innerText = `P1 has ${player1.deck.length} Cards Left`;
  p2CardsLeft.innerText = `P2 has ${player2.deck.length} Cards Left`;
}

function findValue(card) {
  let number = card.slice(1); //cut off the suit to find the value
  return values.find(x => x.name === number).value;
}

function canWeWar() {
  let p1 = player1.deck.length;
  let p2 = player2.deck.length;
  if (p1 < 2) {
    console.log(p1 < 2);
    console.log("p1 lost");
    msgEl.innerHTML = `${player2.name} Wins the Game, ${player1.name} didn't have enough cards for war`
    dealEl.disabled = true;
  } else if (p2 < 2) {
    console.log(p2 < 2);
    console.log("p2 lost");
    msgEl.innerHTML = `${player1.name} Wins the Game ${player2.name} didn't have enough cards for war`
    dealEl.disabled = true;
  } else {
    war();
  }
}

function findRoundWinner(p1c,p2c) {
  rounds++;
  document.getElementById('rounds').innerText = rounds;
  if (p1c === p2c) {
    roundWinner = `WAR!`;
    console.log('there was a tie');
    updateWinnerMessage(); //update msg to say which player one the round
    canWeWar();
  } else if (p1c < p2c) {
    p2Card.classList.add('winner');
    winnings(player2);
  } else if (p1c > p2c) {
    p1Card.classList.add('winner');
    winnings(player1);
  }
}

function winnings(winner){
  roundWinner = `${winner.name} wins ${battleArena.length} cards`;
  winner.wins += 1;
  giveVictor(winner.deck);
  updateWinnerMessage(); //update msg to say which player one the round
}

function updateWinnerMessage() {
  msgEl.innerText = `${roundWinner}`
}

function checkIfGameOver() {
  if (player1.deck.length === 0) {
    console.log("p1 lost")
    msgEl.innerText = `${player2.name} wins the Game`
    dealEl.disabled = true;
  } else if (player2.deck.length === 0) {
    console.log("p2 lost")
    msgEl.innerText = `${player1.name} wins the Game`
    dealEl.disabled = true;
  }
}

function giveVictor(victor) {
  let length = victor.length;
  battleArena.forEach((card) => victor.splice(length, 0, card));
  battleArena.splice(0);
}

function war() {
  drawCards();
  drawCards();
  dealEl.disabled = true;
  setTimeout(function() {
    clearField();
    let p1card = battleArena[battleArena.length-1];
    let p2card = battleArena[battleArena.length-2];
    showCards(p2card, p1card);
    findRoundWinner(findValue(p2card), findValue(p1card))
    dealEl.disabled = false;
  }, 1000);
}

function draw() {
  clearField(); // clear the classes from the page that make the cards
  drawCards(); //move cards from players deck to battle arena
  showCards(battleArena[0], battleArena[1]); // update the dom to show the cards drawn
  findRoundWinner(findValue(battleArena[0]), findValue(battleArena[1])); // use value to find which card is larger
  shuffleXrounds();
  render();
}

function shuffleXrounds() {
  if (rounds % 5 === 0) {
    suffleDeckmini(player1.deck);
    suffleDeckmini(player2.deck);
  }
}

function render() {
  updateCardsLeft(); //update text for how many cards left each player has
  checkIfGameOver(); //check if someone one the game
  p1WinsEl.innerText = player1.wins;
  p2WinsEl.innerText = player2.wins;
};

init();