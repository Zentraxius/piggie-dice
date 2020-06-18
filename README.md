# Pig Dice

#### Pig dice game where each player rolls a die until they reach 100.

#### By Kelly Eidsvik & Emma Hellman

## Description

## Setup/Installation Requirements

#### Open by downloading:
1. Download or clone this repository from GitHub [here](https://github.com/keidsvik/hog-cube.git)
2. Once on your machine, double-click on index.html to open in your default browser.

#### Open with Bash/GitBash:
1. Clone this repository onto your computer
`https://github.com/keidsvik/hog-cube.git`
2. Navigate to the `hog-cube` directory in your preferred text editor.
3. Open index.html in preferred browser:
`open index.html`

## Specs

Player rolls the dice
Input: roll
Output: continue to roll dice until hitting 1.

- Player constructor

- Dice constructor
- roll function

Player hits 1 with dice
Input: Dice rolls 1.
Output: Next player's turn.

- Player constructor
- turn function

- Dice constructor
- roll function

Player clicks hold
Input: Hold.
Output: Switch player's turn.

- Player constructor
- hold function
- switch turn function

Player rolls a 2, 3, 4, 5 or 6.
Input: Player rolls a 2, 3, 4, 5 or 6.
Output: Dice roll is added to running total.

- Player constructor
- hold function
- switch turn function

- Dice constructor
- roll function

Player clicks hold after rolling 2, 3, 4, 5, or 6.
Input: Running total is added to total score and it becomes next player's turn.

- Player constructor
- hold function
- switch turn function
- score keeper

- Dice constructor
- roll function

Player rolls a 1.
Input: Player rolls a 1 
Output: Running total becomes 0 and total score stays the same.

Player gets to 100
Input: Player gets 100 or more in their total score.
Output: Game ends. Alert "Player# is winner!" and resets game.

Additional functionality
Input: Click on "New Game" button.
Output: Reset scores.

## Known Bugs

No known bugs!

## Support and contact details

For support please contact NOBODY

## Technologies Used

HTML | CSS | JavaScript
Bootstrap | jQuery

### License

MIT

Copyright (c) 2020 **Kelly Eidsvik** & **Emma Hellman**