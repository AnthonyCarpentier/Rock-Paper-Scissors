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
function playRound(playerSelection, computerSelection) 
	{
		if ((playerSelection.toLowerCase()) == computerSelection) 
		{
			return `You tie, you both selected the same thing!`;
		} 
		else if ((playerSelection.toLowerCase()) == `rock`) 
		{
			if (computerSelection == `paper`) 
			{
				return (`You Lose, ` + computerSelection + ` beats ` + (playerSelection.toLowerCase()) + `!`);
			} 
			else 
			{
				return (`You Win, ` + (playerSelection.toLowerCase()) + ` beats ` + computerSelection + `!`);
			}
			
		}
		else if ((playerSelection.toLowerCase()) == `scissors`)
		{
			if (computerSelection == `rock`) 
			{
				return (`You Lose, ` + computerSelection + ` beats ` + (playerSelection.toLowerCase()) + `!`);
			} 
			else 
			{
				return (`You Win, ` + (playerSelection.toLowerCase()) + ` beats ` + computerSelection + `!`);
			}
		
		}
		else if ((playerSelection.toLowerCase()) == `paper`)
		{
			if (computerSelection == `scissors`) 
			{
				return (`You Lose, ` + computerSelection + ` beats ` + (playerSelection.toLowerCase()) + `!`);
			} 
			else 
			{
				return (`You Win, ` + (playerSelection.toLowerCase()) + ` beats ` + computerSelection + `!`);
			}
			
		}
		else 
		{
			return `you have to return either rock, paper, or scissors!`
		}
	}
function game()
{
	let playerScore = 0;
	let computerScore = 0;
	
	for (i = 0; i < 5; i++)
	{
		let playerSelection = prompt(`Please choose either rock, paper, or scissors`);
		let computerSelection = computerPlay();
		let roundResult = playRound(playerSelection, computerSelection);
		console.log(playerSelection);
		console.log(computerSelection);
		if (roundResult == `You tie, you both selected the same thing!`)
		{
			console.log(`Round was a tie, no points to player or computer`);
		}
		else if (roundResult == (`You Win, ` + (playerSelection.toLowerCase()) + ` beats ` + computerSelection + `!`))
		{
			playerScore += 1;
			console.log(`Round was won by the player, who is awarded one point`);
		}
		else
		{
			computerScore += 1;
			console.log(`Round was won by the computer, who is awarded one point`);
		}
	}
	console.log(playerScore);
	console.log(computerScore);
	if (playerScore > computerScore)
	{
		console.log(`The player wins, with a score of ` + playerScore + ` to ` + computerScore + `!`);
	}
	else if (computerScore > playerScore)
	{
		console.log(`The computer wins, with a score of ` + computerScore + ` to ` + playerScore + `!`);
	}
	else
	{
		console.log(`It's a tie!`);
	}
}
game();