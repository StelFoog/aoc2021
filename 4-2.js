const fs = require('fs');

fs.readFile('./input.txt', 'UTF-8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}
	// Code
	//
	let [numbers, ...boards] = data.slice(0, -1).split('\n\n');
	numbers = numbers.split(',');

	boards = boards.map((v) =>
		v
			.split('\n')
			.join(' ')
			.split(' ')
			.filter((v) => !!v)
	);
	let boolBoards = [];
	let winningBoards = [];
	boards.forEach((v, i) => {
		winningBoards[i] = false;
		boolBoards[i] = [];
		v.forEach((_v, j) => {
			boolBoards[i][j] = false;
		});
	});

	function markNumber(number) {
		for (let i = 0; i < boards.length; i++) {
			if (winningBoards[i]) continue;
			for (let j = 0; j < boards[0].length; j++)
				if (number === boards[i][j]) boolBoards[i][j] = true;
		}
	}

	function determineWinner(numIndex) {
		let i;
		for (i = 0; i < boards.length; i++) {
			if (winningBoards[i]) continue;
			for (let j = 0; j < boards[i].length; j += 5) {
				if (
					boolBoards[i][j] &&
					boolBoards[i][j + 1] &&
					boolBoards[i][j + 2] &&
					boolBoards[i][j + 3] &&
					boolBoards[i][j + 4]
				)
					winningBoards[i] = numIndex;
			}
			for (let j = 0; j < 5; j++) {
				if (
					boolBoards[i][j] &&
					boolBoards[i][j + 5] &&
					boolBoards[i][j + 10] &&
					boolBoards[i][j + 15] &&
					boolBoards[i][j + 20]
				)
					winningBoards[i] = numIndex;
			}
		}
	}

	function unMarkedSum(i) {
		let sum = 0;
		boards[i].forEach((v, j) => {
			if (!boolBoards[i][j]) sum += Number(v);
		});
		return sum;
	}

	let i;
	for (i = 0; i < numbers.length; i++) {
		markNumber(numbers[i]);
		determineWinner(i);
		if (!winningBoards.includes(false)) break;
	}

	console.log(unMarkedSum(winningBoards.indexOf(i)) * numbers[i]);
});
