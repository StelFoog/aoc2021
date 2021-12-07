const fs = require('fs');

fs.readFile('./input.txt', 'UTF-8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}
	// Code
	//
	const incomingLanterfish = data
		.slice(0, -1)
		.split(',')
		.map((v) => Number(v));

	let lanternfish = Array(9).fill(0);
	incomingLanterfish.forEach((lf) => lanternfish[lf]++);

	for (let days = 0; days < 80; days++) {
		const spawners = lanternfish.shift();
		lanternfish.push(spawners);
		lanternfish[6] += spawners;
	}

	console.log(lanternfish);
	console.log(lanternfish.reduce((sum, num) => sum + num));
});
