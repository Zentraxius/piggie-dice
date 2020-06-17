//BUSINESS LOGIC
var playerOne = newPlayer("Player One")
var playerTwo = newPlayer("Player two")

function players () {
  this.totalScore = 0;
  this.roundScore = 0;
}

Game.prototype.switchTurn = 


Player1.prototype.dieroller = function() {
  this.diceRoll = Math.floor((Math.random() * 6) + 1);
}

Player2.prototype.dieroller = function() {
  this.diceRoll = Math.floor((Math.random() * 6) + 1);
}

if (this.rollscore === 1) {
  this.roundscore = 0;
} else {
  this.roundscore += this.rollscore;
}

Player2.prototype.totalscore = function() {
this.totalscore += this.roundscore
}

//Prototypes
// add a round
// add a roll
// switch turns



//USER INTERFACE

$(document).ready(function() {
$("#roll").click(function() {
  $("#player1Score").text("whatever our thing is that does dice rolls");
  $("#player2Score").text("whatever our thing is that does dice rolls");
});
  
$("#hold").click(function() {
  $("#player1Score").text("whatever our thing is that does dice rolls");
  $("#player2Score").text("whatever our thing is that does dice rolls");

});
  event.preventDefault();
});
