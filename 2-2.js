const fs = require('fs');

fs.readFile('./input', 'UTF-8', (error, data) => {
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
		depth = 0,
		aim = 0;
	instructions.forEach(([instruction, value]) => {
		switch (instruction) {
			case 'forward':
				horiontal += value;
				depth += value * aim;
				break;
			case 'down':
				aim += value;
				break;
			case 'up':
				aim -= value;
				break;
		}
	});
	console.log(horiontal * depth);
});
