

// function printRandomNumber1(){
// document.getElementById("randomNumberTest").innerHTML = randomNumber1;
// }

function printRandomDiceImg() {
  var randomNumber1 = Math.floor(1 + Math.random() * 6);
  var randomNumber2 = Math.floor(1 + Math.random() * 6);
  // document.getElementById("randomNumberTest").innerHTML = randomNumber1;
  if (randomNumber1 == 1) {
    document.getElementById("dicePlayer1ID").src = "images/dice1.png";
  } else if (randomNumber1 == 2) {
    document.getElementById("dicePlayer1ID").src = "images/dice2.png";
  } else if (randomNumber1 == 3) {
    document.getElementById("dicePlayer1ID").src = "images/dice3.png";
  } else if (randomNumber1 == 4) {
    document.getElementById("dicePlayer1ID").src = "images/dice4.png";
  } else if (randomNumber1 == 5) {
    document.getElementById("dicePlayer1ID").src = "images/dice5.png";
  } else if (randomNumber1 == 6) {
    document.getElementById("dicePlayer1ID").src = "images/dice6.png";
  }
  if (randomNumber2 == 1) {
    document.getElementById("dicePlayer2ID").src = "images/dice1.png";
  } else if (randomNumber2 == 2) {
    document.getElementById("dicePlayer2ID").src = "images/dice2.png";
  } else if (randomNumber1 == 3) {
    document.getElementById("dicePlayer2ID").src = "images/dice3.png";
  } else if (randomNumber2 == 4) {
    document.getElementById("dicePlayer2ID").src = "images/dice4.png";
  } else if (randomNumber2 == 5) {
    document.getElementById("dicePlayer2ID").src = "images/dice5.png";
  } else if (randomNumber2 == 6) {
    document.getElementById("dicePlayer2ID").src = "images/dice6.png";
  }
  if(randomNumber1>randomNumber2){
    document.getElementById("result").innerHTML = "Player 1 Wins!";
  }
  else if (randomNumber1<randomNumber2){
    document.getElementById("result").innerHTML = "Player 2 Wins!";
  }
  else{
    document.getElementById("result").innerHTML = "Draw!";
  }
}
