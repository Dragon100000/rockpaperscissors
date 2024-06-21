const choices = ['rock', 'paper', 'scissors'];//the choices for the player
const likelyChoices = ['rock', 'rock', 'paper', 'scissors', 'scissors', 'scissors'];//the choices for the computer
const lose = {
    'rock': 'paper',
    'paper': 'scissors',
    'scissors': 'rock'
};
let status = true;
let computer;//declaring the variable computer
let num = 0;//starting value for the numerator of the percent
let numTie = 0;
let den = 0;//starting denominator value
let denTie = 0;
let percent;//declaring the varible percent
let percentTie;

function playGame(player, imageUrl) {//the function that is read in the html script when a button is pressed
computer = likelyChoices[Math.floor(Math.random()*6)];//the computer's random choice
den ++;
denTie ++;
let result;//declaring the variable result
    if (player === computer) {//the scenario when there is a tie
        if (status === false) {
            result = "It's a tie!";
            numTie ++;
        } else {
            computer = lose[player];
            result = 'Computer wins!';
        }
    } else if (//the scenarios when the player wins
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        if (status === false) {
            result = "You win!";
            num ++;
            numTie ++;
        } else {
            console.log('win')
            computer = lose[player];
            result = 'Computer wins!';
        }
    } else {//the scenarios when the computer wins
        result = "Computer wins!";
    }
    if (den === 0) {
        // Handle division by zero case
        percent = 'undefined';
    } else {
        // Perform the division
        percent = Math.ceil((num / den) * 100) + '% win rate';
    }
    if (denTie === 0) {
        // Handle division by zero case
        percentTie = 'undefined';
    } else {
        // Perform the division
        percentTie = Math.ceil((numTie / denTie) * 100) + '% win/tie rate';
    }
    document.getElementById('percentTie').textContent = percentTie
    document.getElementById('percent').textContent = percent
    document.getElementById("displayedImage").src = imageUrl;
    document.getElementById("displayedImage2").src = computer + '.jpg';
    document.getElementById("result").innerHTML = `You chose ${player}.<br>Computer chose ${computer}.<br>${result}`;//it goes to the html code and shows the results
}
