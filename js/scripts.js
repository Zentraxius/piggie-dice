
//constructor function

function Game(playerTurn, roundScore, totalScore, winner, player1, player2) {
  this.playerTurn = playerTurn;
  this.roundScore = roundScore;
  this.totalScore = totalScore;
  this.winner = winner;
  this.player1 = player1;
  this.player2 = player2;
}

//prototypes
Game.prototype.switchTurn = function() {
  if (this.playerTurn === 1) {
    this.playerTurn = 2;
  } else (this.playerTurn === 2); {
    this.playerTurn = 1;
  }
}

Game.prototype.addScores = function() {
   // roundTotal 
}

Game.prototype.declareWinner = function() {
  if (this.player1.totalScore >= 100) {
    this.winner;
  } else (this.player2.totalScore >= 100) ; {
    this.winner;
  };
};

Game.prototype.rollTotal = function () {
  let currentRoll = roll();
  if (currentRoll === 1) {
    
  }
  this.diceRoll = Math.floor((Math.random() * 6) + 1);
  // console.log(this.diceRoll)
}

let roll = function() {
  let dieRoll = Math.floor((Math.random() * 6) + 1);
  console.log(dieRoll)
  return dieRoll; 
}

Game.prototype.roundScore = function () {
  if (this.diceRoll === 1) {
    this.roundTotal = 0;
    console.log(this.diceRoll)// ERROR - not runs unless 1 is hit.
    //switchturn?
  } else {

    console.log(this.roundTotal += this.diceRoll);
    //this.roundTotal += this.diceRoll
    //console.log(this.diceRoll)
    this.roundTotal += this.diceRoll;
  }
}

Game.prototype.totalSum = function () {
  this.totalScore += this.roundScore
  if (this.totalScore >= 100) {
    alert("You won the game!");
    resetGame();
  }
  return this.totalScore
}

function resetGame() {
  totalScore = 0;
  roundTotal = 0;
  diceRoll = 0;
}


$(document).ready(function () {
  
  let player1 = new Game(0);
  let player2 = new Game(0);

  $("#roll").click(function (event) {
    event.preventDefault();

    player1.rollTotal();
    if (player1.currentPlayer === true) {
      // Scope Issue console.log(this.diceRoll)

      //player1.roundScore(); //player1.diceRoll

      // if (player1.diceRoll === 1) {
      //   player1.changeTurn();
      //   player2.changeTurn();
      // } 
      
      $("#rollscore").text(player1.diceRoll);
      $("#player1round").text(player1.roundScore);

    } else if (player2.currentPlayer === true) {
      player2.rollTotal();
      if (player2.diceRoll === 1) {
        player2.changeTurn();
        player1.changeTurn();
      } else player2.roundScore();
      $("#rollscore").text(player2.diceRoll);
      $("#player2round").text(player2.roundScore);
    }

  })

})


//roll button
  //rolls 1-6
  //adds roll to round total
  //check if roll is 1
    //if 1 switch turn
//hold button
  //adds round total to player score
  //check if player won
  //switch turn
