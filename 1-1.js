const fs = require('fs');

fs.readFile('./input', 'UTF-8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}
	// Code
	const depths = data
		.split('\n')
		.filter((v) => !!v)
		.map((v) => Number(v));

	let increases = 0;
	for (let i = 1; i < depths.length; i++) {
		if (depths[i] > depths[i - 1]) increases++;
	}

	console.log(increases);
});
