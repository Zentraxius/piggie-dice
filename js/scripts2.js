function Player(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
  }
  
  function Dice(totalScore, diceRoll) {
  this.totalScore = 0;
  this.diceRoll = Math.floor((Math.random() * 6) + 1);
  console.log(diceRoll);
  }
  
  Dice.prototype.roll = function() {
  if (this.diceRoll > 2) {
  return diceRoll + totalScore; {
  else if (this.diceRoll > 2) {
   CHANGE TURNS HERE SOMEHOW
  }

//BUSINESS LOGIC
var playerOne = new Player("Player One")
var playerTwo = new Player("Player two")

function Game (player1, player2) {

}

function Player (totalScore, roundScore, diceRoll, currentPlayer) {
  this.totalScore = totalScore,
  this.roundScore = roundScore,
  this.diceRoll = diceRoll,
  this.currentPlayer = currentPlayer
}

var player1 = new Player(0, 0, 0, true);
var player2 = new Player(0, 0, 0, false);

Player.prototype.dieRoller = function() {
  this.diceRoll = Math.floor((Math.random() * 6) + 1);
  return this.diceRoll;
}

Player.prototype.roundScore = function {
  if (this.roundScore === 1) {
    this.roundScore = 0;
  } else {
    this.roundScore += this.diceRoll;
  }
}

Player.prototype.totalScore = function() {
  this.totalScore += this.roundscore
  return totalScore;
}

Player.prototype.hold = function() {
//If this.currentPlayer 
}

Player.prototype.playerSwitch = function() {
  if (this.currentPlayer === true) {
    this.currentPlayer === false 
  } else {
    this.currentPlayer === true
  }
}



//When someone rolls a 1 or holds -- this.currentPlayer.playerSwitch()

//Prototypes
// add a round
// add a roll
// switch turns



//USER INTERFACE

$(document).ready(function() {
$("#roll").click(function (diceRoll) {
  this.currentPlayer.dieRoller()
  $("#player1Score").text("whatever our thing is that does dice rolls");
  $("#player2Score").text("whatever our thing is that does dice rolls");
});
  
$("#hold").click(function() {
  $("#player1Score").text("whatever our thing is that does dice rolls");
  $("#player2Score").text("whatever our thing is that does dice rolls");

});
  event.preventDefault();
});
