const fs = require('fs');

fs.readFile('./input.txt', 'UTF-8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}
	// Code
	//
	const split = data.slice(0, -1).split('\n');
	const matrix = [];
	for (let i = 0; i < 1000; i++) {
		// verified visually that no coordinate exceeds 1000
		matrix[i] = Array(1000).fill(0);
	}

	split.forEach((line) => {
		const [one, two] = line.split(' -> ');
		const [x1, y1] = one.split(',').map((v) => Number(v));
		const [x2, y2] = two.split(',').map((v) => Number(v));

		if (x1 === x2) {
			// horizontal line
			for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) matrix[x1][i]++;
		} else if (y1 === y2) {
			// vertical line
			for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) matrix[i][y1]++;
		}
	});

	let sumCross = 0;
	matrix.forEach((column) => {
		column.forEach((value) => {
			if (value > 1) sumCross++;
		});
	});

	console.log(sumCross);
});
