const fs = require('fs');

function calcFuelCost(from, to) {
	let fuelUsed = 0;
	let mover = from;
	const modify = from < to ? 1 : -1;
	for (let cost = 1; mover !== to; cost++) {
		fuelUsed += cost;
		mover += modify;
	}

	return fuelUsed;
}

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
			fuelUsed += calcFuelCost(v, i);
		});

		if (fuelUsed < minFuel) minFuel = fuelUsed;
	}

	console.log(minFuel);
});
