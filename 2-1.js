const fs = require('fs');

fs.readFile('./input.txt', 'UTF-8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}
	// Code
	const instructions = data
		.slice(0, -1)
		.split('\n')
		.map((v) => {
			const [ins, val] = v.split(' ');
			return [ins, Number(val)];
		});

	let horiontal = 0,
		depth = 0;
	instructions.forEach(([instruction, value]) => {
		switch (instruction) {
			case 'forward':
				horiontal += value;
				break;
			case 'down':
				depth += value;
				break;
			case 'up':
				depth -= value;
				break;
		}
	});
	console.log(horiontal * depth);
});
