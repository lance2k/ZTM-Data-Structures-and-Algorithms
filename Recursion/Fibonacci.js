// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive0) should return 8

function fibonacciIterative(n) {
	//code here;
	let arr = [0, 1];
	for (let index = 2; index <= n; index++) {
		arr.push(arr[index - 1] + arr[index - 2]);
	}
	return arr[n];
}
console.log(fibonacciIterative(40));

function fibonacciRecursive(n) {
	//code here;
	if (n < 2) {
		return n;
	}
	return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(40));
