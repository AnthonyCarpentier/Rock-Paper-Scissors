function computerPlay() 
	{
		let randomChoice = (Math.floor(Math.random() * 100)/100);
		if (randomChoice <= 0.33)
			{
				return `rock`;
			}
		else if (randomChoice >= 0.66)
			{
				return `paper`;
			}
		else
			{
				return `scissors`;
			}
	}	


let playerScore = 0;
let computerScore = 0;
let resultsContainer = document.querySelector(`#resultsContainer`);


let playerScoreTracker = document.createElement(`div`);
playerScoreTracker.classList.add(`playerScoreTracker`);
playerScoreTracker.textContent = `Player Score = ` + playerScore;

let computerScoreTracker = document.createElement(`div`);
computerScoreTracker.classList.add(`computerScoreTracker`);
computerScoreTracker.textContent = `Computer Score = ` + computerScore;

let roundResultTracker = document.createElement(`div`);
roundResultTracker.classList.add(`roundResultTracker`);
// roundResultTracker.textContent = ``;


	function playRound(playerSelection) 
	{
		let computerSelection = computerPlay();
		let roundResult = ``;
		

		// Results are displayed from the player perspective, so `lose` refers to the player losing the round, and `win` means the player wins. I also really should have made this a case statement
		if (playerSelection == computerSelection) 
		{
			roundResult = `tie`;
		} 
		else if (playerSelection == `rock`) 
		{
			if (computerSelection == `paper`) 
			{
				roundResult = `lose`;
			} 
			else 
			{
				roundResult = `win`;
			}
			
		}
		else if (playerSelection == `scissors`)
		{
			if (computerSelection == `rock`) 
			{
				roundResult = `lose`;
			} 
			else 
			{
				roundResult = `win`;
			}
		
		}
		else if (playerSelection == `paper`)
		{
			if (computerSelection == `scissors`) 
			{
				roundResult = `lose`;
			} 
			else 
			{
				roundResult = `win`;
			}
			
		}

		if (playerScore > 4) {
			roundResultTracker.textContent = `The Player has won the game, with 5 points to ` + computerScore;
			resultsContainer.appendChild(roundResultTracker);
		}
		else if (computerScore > 4) {
			roundResultTracker.textContent = `The Computer has won the game, with 5 points to ` + playerScore;
			resultsContainer.appendChild(roundResultTracker);
		}
		else {
			roundResolution(roundResult, computerSelection);
		}
		
	}

	function roundResolution(roundResult, computerSelection) {
		if (roundResult == `tie`) {
			roundResultTracker.textContent = `Both players chose the same weapon, the round is a tie`;
		} 
		else if (roundResult == `lose`) {
			roundResultTracker.textContent = `Player chose ` + playerSelection + `, Computer chose ` + computerSelection + `, Computer wins the round!`;
			computerScore++;
		}
		else {
			roundResultTracker.textContent = `Player chose ` + playerSelection + `, Computer chose ` + computerSelection + `, Player wins the round!`;
			playerScore++;
		}
		playerScoreTracker.textContent = `Player Score = ` + playerScore;
		resultsContainer.appendChild(playerScoreTracker);
		computerScoreTracker.textContent = `Computer Score = ` + computerScore;
		resultsContainer.appendChild(computerScoreTracker);
		resultsContainer.appendChild(roundResultTracker);
	}
// function game(playerSelection)
// {
// 	let playerScore = 0;
// 	let computerScore = 0;

// 		let computerSelection = computerPlay();
// 		let roundResult = playRound(playerSelection, computerSelection);
// 		console.log(playerSelection);
// 		console.log(computerSelection);
// 		if (roundResult == `You tie, you both selected the same thing!`)
// 		{
// 			console.log(`Round was a tie, no points to player or computer`);
// 		}
// 		else if (roundResult == (`You Win, ` + (playerSelection) + ` beats ` + computerSelection + `!`))
// 		{
// 			playerScore += 1;
// 			console.log(`Round was won by the player, who is awarded one point`);
// 		}
// 		else
// 		{
// 			computerScore += 1;
// 			console.log(`Round was won by the computer, who is awarded one point`);
// 		}
	
// 	console.log(playerScore);
// 	console.log(computerScore);
    
    
//     if (playerScore > 4)
// 	{
// 		console.log(`The player wins, with a score of ` + playerScore + ` to ` + computerScore + `!`);
// 	}
// 	else if (computerScore > 4)
// 	{
// 		console.log(`The computer wins, with a score of ` + computerScore + ` to ` + playerScore + `!`);
// 	}
// }
// game();

let rSelect = `rock`;
let pSelect = `paper`;
let sSelect = `scissors`;
let playerSelection = rSelect;

// function playerBtnSelect (selector) {
    
// }



let buttonRock = document.querySelector(`#buttonRock`);
buttonRock.addEventListener(`click`, () => {
    // alert(`You have chosen Rock`);
    // console.log(playerSelection);
    playerSelection = rSelect;
    playRound(playerSelection);
    console.log(playerSelection);
});

let buttonPaper = document.querySelector(`#buttonPaper`);
buttonPaper.addEventListener(`click`, () => {
    // alert(`You have chosen Paper`);
    // console.log(playerSelection);
    playerSelection = pSelect;
    playRound(playerSelection);
    console.log(playerSelection);
});

let buttonScissors = document.querySelector(`#buttonScissors`);
buttonScissors.addEventListener(`click`, () => {
    // alert(`You have chosen Scissors`);
    // console.log(playerSelection);
    playerSelection = sSelect;
    playRound(playerSelection);
    console.log(playerSelection);
});
