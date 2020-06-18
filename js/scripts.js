
//constructor function
function Player (totalScore, roundTotal, diceRoll, currentPlayer) {
  this.totalScore = totalScore,
  this.roundTotal = roundTotal,
  this.diceRoll = diceRoll,
  this.currentPlayer = currentPlayer
}

//prototypes
Player.prototype.rollTotal = function () {
  this.diceRoll = Math.floor((Math.random() * 6) +1);
  
}

Player.prototype.roundScore = function () {
  if (this.diceRoll === 1) {
    this.roundTotal = 0;
    //switchturn?
  } else {
  this.roundTotal += this.diceRoll
  }
} 

Player.prototype.totalSum = function () {
  this.totalScore += this.roundScore
  if (this.totalScore >= 100) {
    alert("You won the game!")
    resetGame();
  }
  return this.totalScore
}

Player.prototype.changeTurn = function() {
  if (this.currentPlayer === true) {
    this.currentPlayer = false;
  } else {
    this.currentPlayer = true;
    }
  }

function resetGame() {
  totalScore = 0;
  roundTotal = 0;
  diceRoll = 0;
}

$(document).ready(function() {

var player1 = new Player(0, 0, 0, true);
var player2 = new Player(0, 0, 0, false);
  
  $("#roll").click(function(event) {
    event.preventDefault();
  
    if (player1.currentPlayer === true) {
      player1.rollTotal();
      console.log(this.diceRoll)
      if (player1.diceRoll === 1) {
        player1.changeTurn();
        player2.changeTurn();
      } 
      player1.roundScore(player1.diceRoll);
      $("#rollscore").text(player1.diceRoll);
      $("#player1round").text(player1.roundScore);
      
    } else if (player2.currentPlayer === true) {
      player2.rollTotal();
      if (player2.diceRoll === 1) {
        player2.changeTurn();
        player1.changeTurn();
      } 
      player2.roundScore();
      $("#rollscore").text(player2.diceRoll);
      $("#player2round").text(player2.roundScore);
    }

  })

})


// function totalRoll(roll, player){
//   if (roll=== 1) {
//     player.totalScore = 0;
//     alert("You rolled a 1. Now it's your opponent's turn!");
//   } 
//    if (roll>1) {
//     player.totalScore += roll;
//   }
// }

// Player.prototype.roundScore = function () {
//   if (this.diceRoll === 1) {
//     this.roundTotal = 0;
//     //switchturn?
//   } else {
//   this.roundTotal += this.diceRoll
//   }
// } 