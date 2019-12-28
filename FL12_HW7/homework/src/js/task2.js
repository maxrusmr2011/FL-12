const NUM0 = 0, NUM1 = 1, RISEPRIZE = 2, ATTEMPTS = 3, BIGRANGE = 4,
PRIZE1 = 100, PRIZE2 = 50, PRIZE3 = 25, RANGE = 8;
const defPrizes = [PRIZE1, PRIZE2, PRIZE3];
let totalPrize = 0, countWins = 0, next;
if ( !confirm('Do you want to play a game?') ) {
	alert('You did not become a billionaire, but can.');
} else {
	do {
		let currRange = RANGE + countWins * BIGRANGE, win, currPrize, gamerNum;
		let randNum = Math.floor( Math.random() * (currRange + NUM1) );
		next = false;
		for (let i = NUM0; i < ATTEMPTS; i++) {
			currPrize = defPrizes[i] * Math.pow(RISEPRIZE, countWins);
			let str = 'Choose a roulette pocket number from 0 to ' + currRange +
			'\nAttempts left: ' + (ATTEMPTS - i) +
			'\nTotal prize: ' + totalPrize + '$' +
			'\nPossible prize on current attempt: ' + currPrize + '$\n';
			if ((gamerNum = prompt(str)) &&
				(gamerNum = parseInt(gamerNum)) &&
				gamerNum === randNum ) { 
				totalPrize += currPrize;
				win = true;
				break;
			}
		}
		if (win && confirm('Congratulation, you won! Your prize is: ' + totalPrize +
			' $. Do you want to continue?') ) {
			next = true;
			countWins++;
		} else if (	alert('Thank you for your participation. Your prize is: ' + totalPrize + '$') ||
			confirm('Do you want to play again?') ) {
			next = true;
			countWins = NUM0;
		}
	} while (next)
}
