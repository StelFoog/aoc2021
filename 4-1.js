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
	boards.forEach((v, i) => {
		boolBoards[i] = [];
		v.forEach((_v, j) => {
			boolBoards[i][j] = false;
		});
	});

	function markNumber(number) {
		for (let i = 0; i < boards.length; i++)
			for (let j = 0; j < boards[0].length; j++)
				if (number === boards[i][j]) boolBoards[i][j] = true;
	}

	function determineWinner() {
		let i;
		for (i = 0; i < boards.length; i++) {
			for (let j = 0; j < boards[i].length; j += 5) {
				if (
					boolBoards[i][j] &&
					boolBoards[i][j + 1] &&
					boolBoards[i][j + 2] &&
					boolBoards[i][j + 3] &&
					boolBoards[i][j + 4]
				)
					return i;
			}
			for (let j = 0; j < 5; j++) {
				if (
					boolBoards[i][j] &&
					boolBoards[i][j + 5] &&
					boolBoards[i][j + 10] &&
					boolBoards[i][j + 15] &&
					boolBoards[i][j + 20]
				)
					return i;
			}
		}

		return false;
	}

	function unMarkedSum(i) {
		let sum = 0;
		boards[i].forEach((v, j) => {
			if (!boolBoards[i][j]) sum += Number(v);
		});
		return sum;
	}

	let winningBoard = false;
	let i;
	for (i = 0; i < numbers.length; i++) {
		markNumber(numbers[i]);
		winningBoard = determineWinner();
		if (winningBoard !== false) break;
	}

	console.log(unMarkedSum(winningBoard) * numbers[i]);
});
