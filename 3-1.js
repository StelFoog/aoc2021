const fs = require('fs');

fs.readFile('./input', 'UTF-8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}
	// Code
	const numbers = data.slice(0, -1).split('\n');
	const numberLength = numbers[0].length;
	let epsilon = '';
	let gamma = '';
	for (let i = 0; i < numberLength; i++) {
		let ones = 0;
		let zeroes = 0;
		numbers.forEach((num) => {
			if (num[i] === '1') ones++;
			else zeroes++;
		});

		if (ones > zeroes) {
			epsilon += '1';
			gamma += '0';
		} else {
			epsilon += '0';
			gamma += '1';
		}
	}

	console.log(epsilon);
	console.log(gamma);
	console.log(parseInt(epsilon, 2) * parseInt(gamma, 2));
});
