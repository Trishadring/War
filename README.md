# War

## War:
A description of your game. Background info of the game is a nice touch.

## Screenshot(s):

img links



## Technologies Used:

 JavaScript, HTML, CSS, Google Fonts, CardStarter

 ## Getting Started:

Link needed 
☐ Getting Started: In this section include the link to your deployed game and any instructions you deem important.


# Making the Game

## WireFrames:

☐ Screenshot(s): Images of your actual game.

## Pseudocode:

```
1) Define required constants:
    1.1) Define players 1 & 0.
    1.2) Define list of cards with their worth
      1.2.1) create list of all cards in the game
    1.3) suits of the deck

2) Define required variables used to track the state of the game:
    2.1) Decks of each player: what cards & values they have in their deck
      2.1.1) how many cards are left in each players deck
      2.1.2) win condition: if player has no more cards the other player wins
    2.2) playing feild: what cards are on the feild: now called battle arena

3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
    3.1) The deal button: to deal new cards to the players
    3.2) start button: restart game and preform init function
    3.3) message: where we can put messages of who won each round
    3.4) p1 and p2 message area: to display how many cards each player has left
    3.5) battle arena: showcase current cards from each player

4) Upon loading, the app should:
    4.1) Initialize the state variables:
        4.1.1) Randomize the deck and give each player 26 cards.
          4.1.1.1) Make sure each card is only in the game once.
        4.1.2) Initialize winner to null to represent that there is no winner yet.
    4.2) Render those state variables to the page:
        4.2.1) Render the board:
            4.2.1.1) Render the number of cards above each players deck.
            4.2.1.2) Check for cards in playing arena array if card is found display on DOM
        4.2.2) Render a message:
            4.2.2.1) Check for winner of the round and add the cards used to bottom of the winners deck
              4.2.2.1.1) update the number of cards the each player has.
            4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
            4.2.2.3) Otherwise, render a congratulatory message to which player has won.
    4.3) Wait for the user to click draw.
    
5) Handle a player clicking draw:
    5.1) Get the next card in each players deck and move it to the playing arena
        5.1.1) should update count of each players deck
        5.1.2) make sure when card is moved that it is taken out of players deck
        5.1.3) 
    5.2) determine winner of the current round
    5.3) update message to show winner
    5.4) after move cards from playing arena to the bottom of the winning players deck array
    5.5) update deck counts
    5.6) keep going untill one player has no cards left or player presses start game
    5.7) after player clicks start game change langue to restart game

6) Handle a player clicking the replay button:
    6.1) Reset player deck arrays. 
    6.2) remove any messages from message area.
    6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).
```

## Next Steps

* Show cards played when playing war (the hidden cards)
* display how many cards each player got instead of who won the round
* add animation
* improve code
* add bootstrap 
* add media queries
* impove CSS