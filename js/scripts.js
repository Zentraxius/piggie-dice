
function Player (player1) {
  this.player1 = player1;
  this.player1Total = p1Total;
  this.player1Round = p1Round;
}

function Dice () {
  let roll = Math.floor((Math.random() * 6) + 1);
  this.diceRoll = roll;
}

Dice.prototype.dieRoll = function (totalScore) {
  if (this.diceRoll > 2) {
    return 
  } else if (this.diceRoll < 2) {
    return 
}


$(document).ready(function() {
  $("form#thegame").submit(function(event) {
    event.preventDefault();

  
  })
});