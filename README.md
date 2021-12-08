# War

## Pseudocode:

```
1) Define required constants:
    1.1) Define players 1 & -1.
    1.2) Define list of cards with their worth
    1.3) suits of the deck

2) Define required variables used to track the state of the game:
    2.1) Decks of each play, what cards & values they have in their deck & how many cards are left in each players deck
    2.2) playing feild: what cards are on the feild


3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant:
    3.1) The deal button, to deal new cards to the players
    3.2) start button: restart game and preform init function
    3.3) message area: where we can put messages of who won each round as well as how many cards each player has
    3.4) play arena: showcase current cards from each player

4) Upon loading the app should:
    4.1) Initialize the state variables:
        4.1.1) Randomize the deck and give each player 26 cards.
          4.1.1.1) Make sure each card is only in the game once.
        4.1.2) Initialize winner to null to represent that there is no winner yet.
    4.2) Render those state variables to the page:
        4.2.1) Render the board:
            4.2.1.1) Render the number of cards above each players deck.
        4.2.2) Render a message:
            4.2.2.1) Check for winner of the round and add the cards used to bottom of the winners deck
              4.2.2.2) update the number of cards the each player has.
            4.2.2.2) If winner is equal to 'T' (tie), render a tie message.
            4.2.2.3) Otherwise, render a congratulatory message to which player has won.
    4.3) Wait for the user to click draw.
    

5) Handle a player clicking draw:
    5.1) Get the next card in each players deck and move it to the playing arena
        5.1.1) should update count of each players deck
        5.1.2) make sure when card is moved that it is taken out of players deck
    5.2) determine winner of the current round
    5.3) update message to show winner
    5.4) after 5 seconds move cards from playing arena to the bottom of the winning players deck
    5.5) update the players decks and deck counts
    5.6) keep going untill one player has no cards left or player presses start game
    5.7) after player clicks start game change langue to restart game


6) Handle a player clicking the replay button:
    6.1) Reset player deck arrays. 
    6.2) remove any messages from message area.
    6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).
```
