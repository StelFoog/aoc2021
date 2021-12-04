const fs = require('fs');

fs.readFile('./input.txt', 'UTF-8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}
	// Code
	const depths = data
		.split('\n')
		.filter((v) => !!v)
		.map((v) => Number(v));

	function lastThree(index) {
		return depths[index] + depths[index - 1] + depths[index - 2];
	}

	let increases = 0;
	for (let i = 3; i < depths.length; i++) {
		if (lastThree(i) > lastThree(i - 1)) increases++;
	}

	console.log(increases);
});
