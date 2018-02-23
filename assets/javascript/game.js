$(document).ready(function() {

var randomCrystals = []
var userSum = 0;	
var wins = 0;
var losses = 0;
$("#winScoreBoard").text(wins);
$("#lossScoreBoard").text(losses);

//random computer number between 19-120 will be generated each round
    
//assign random value from 1 to 12 to each crystal
    function fourCrystals(){
        for (var i = 0; i < 4; i++) { 
        var num = Math.floor(Math.random() * 11) + 1;
        randomCrystals.push(num);
        }
        console.log(randomCrystals)  
    }
    fourCrystals();

    //create function to reset the game after a round is either won or lost
  
        var randomNumber = Math.floor(Math.random() * 101) + 19;
        console.log(randomNumber);
        $("#randomNumber").text(randomNumber);
        randomCrystals = [];
        fourCrystals();
        userSum = 0;
        
    function reset(){

        //update the html for next round 
        $("#winScoreBoard").html("Wins: " + wins);
        $("#lossScoreBoard").html("Losses: " + losses);
        $("#userScore").html(userSum);
    } 
    $("#one").click (function(){
        userSum = userSum + randomCrystals[0];
        console.log("New total= " + userSum);
        $("#userScore").text(userSum);
            //check if user lost by score increasing above the random computer number.
            if (userSum > randomNumber) {
                losses++;
                console.log("you lost!");
                reset();
            }
            if (userSum === randomNumber) {
                wins++;
                console.log("you win!");
                reset();
            }
    });
});

//once the userSum is greater than the randomNumber, the loss count needs to reset. 
//Then, the click function needs to iterate for all four crystals, not just the first crystal. 