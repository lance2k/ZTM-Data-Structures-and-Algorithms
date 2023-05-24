// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
	//code here
	if (number == 2) {
		return number;
	}
	if (number < 2) {
		return 1;
	}
	return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
	//code here
	if (number < 2) {
		return 1;
	}
	let index = number - 1;
	for (index; index > 1; index--) {
		number *= index;
	}
	return number;
}
console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
