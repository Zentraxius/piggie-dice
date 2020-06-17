//BUSINESS LOGIC
function players () {
  this.totalScore = 0;
  this.roundScore = 0;
}

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

//Prototypes
// add a round
// add a roll
// switch turns



//USER INTERFACE

$(document).ready(function() {
$("#roll").click(function() {
// stuff here
});
  
$("#hold").click(function() {
// stuff here
});
  event.preventDefault()l
}
})
