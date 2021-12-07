const fs = require('fs');

fs.readFile('./input.txt', 'UTF-8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}
	// Code
	//
	const crabs = data
		.slice(0, -1)
		.split(',')
		.map((v) => Number(v));
	const sortedCrabs = crabs.sort();

	let minFuel = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < sortedCrabs[sortedCrabs.length - 1]; i++) {
		let fuelUsed = 0;
		sortedCrabs.forEach((v) => {
			fuelUsed += Math.abs(v - i);
		});

		if (fuelUsed < minFuel) minFuel = fuelUsed;
	}

	console.log(minFuel);
});
