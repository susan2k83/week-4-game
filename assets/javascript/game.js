$(document).ready(function(){


var wins = 0;
var losses = 0;
var playersTotalScore = 0;



//The random number shown at the start of the game should be between 19 - 120

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var randomNumber = getRandomInt(19, 120);
var red = getRandomInt(1, 12);
var blue = getRandomInt(1, 12);
var green = getRandomInt(1, 12);
var yellow = getRandomInt(1, 12);

//Write a function that pops up an alert
function showRandomNumber() {
    // document.write("Guess this number " + randomNumber);
    $("#randomNumber").text("Match this number: " +  
    	randomNumber);
    console.log(randomNumber);
}
showRandomNumber()





$("#red-crystal").on("click", function() {

	//add the value of the red crystal to the total
	//show the new total to the user
	playersTotalScore = playersTotalScore + red;
     $("#playersTotalScore").text("Your points so far: " + playersTotalScore);
 	if (playersTotalScore === randomNumber) {
		alert("You win!");
	} else if(playersTotalScore > randomNumber) {
		alert("You lose");
	}
});


$("#blue-crystal").on("click", function() {

	//add the value of the red crystal to the total
	//show the new total to the user
	playersTotalScore = playersTotalScore + blue;
	$("#playersTotalScore").text("Your points so far: " + playersTotalScore);
	if (playersTotalScore === randomNumber) {
		alert("You win!");
	} else if(playersTotalScore > randomNumber) {
		alert("You lose");
	}

});

$("#yellow-crystal").on("click", function() {

	//add the value of the red crystal to the total
	//show the new total to the user
	playersTotalScore = playersTotalScore + yellow;
	$("#playersTotalScore").text("Your points so far: " + playersTotalScore);
	if (playersTotalScore === randomNumber) {
		alert("You win!");
	} else if(playersTotalScore > randomNumber) {
		alert("You lose");
	}

});
$("#green-crystal").on("click", function() {

	//add the value of the red crystal to the total
	//show the new total to the user
	playersTotalScore = playersTotalScore + green;
	$("#playersTotalScore").text("Your points so far: " + playersTotalScore);

	if (playersTotalScore === randomNumber) {
		alert("You win!");
	} else if(playersTotalScore > randomNumber) {
		alert("You lose");
	}

});





// to reset game :

function resetGame () {
	total = 0;
	console.log("you win");
}



// each crystal needs a value between 1 and 12, that will be hidden. 
// When user clicks each cystal the playersTotalScore will increase by whatever value the crystal is worth
});