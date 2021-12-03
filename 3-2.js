const fs = require('fs');

fs.readFile('./input', 'UTF-8', (error, data) => {
	if (error) {
		console.error(error);
		return;
	}
	// Code
	const numbers = data.slice(0, -1).split('\n');
	const numberLength = numbers[0].length;
	let nums = [...numbers];
	for (let i = 0; i < numberLength; i++) {
		let ones = 0;
		let zeroes = 0;
		nums.forEach((num) => {
			if (num[i] === '1') ones++;
			else zeroes++;
		});

		if (zeroes > ones) nums = nums.filter((val) => val[i] === '0');
		else nums = nums.filter((val) => val[i] === '1');

		console.log(nums.length);
		if (nums.length <= 1) break;
	}
	const oxygen = nums[0];

	nums = [...numbers];
	for (let i = 0; i < numberLength; i++) {
		let ones = 0;
		let zeroes = 0;
		nums.forEach((num) => {
			if (num[i] === '1') ones++;
			else zeroes++;
		});

		if (zeroes > ones) nums = nums.filter((val) => val[i] === '1');
		else nums = nums.filter((val) => val[i] === '0');

		console.log(nums.length);
		if (nums.length <= 1) break;
	}
	const co2 = nums[0];

	console.log(oxygen);
	console.log(co2);
	console.log(parseInt(oxygen, 2) * parseInt(co2, 2));
});
