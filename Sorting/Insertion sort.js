const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
	const length = array.length;

	// Loop through each element in the array starting from the second element
	for (let i = 1; i < length; i++) {
		let current = array[i];
		let j = i - 1;

		// Keep moving the larger elements to the right until we find the correct position to insert the current element
		while (j >= 0 && array[j] > current) {
			array[j + 1] = array[j];
			j--;
		}

		// Insert the current element in the first available position to its right
		array[j + 1] = current;
	}
}

// Call the insertionSort function and print the sorted array
insertionSort(numbers);
console.log(numbers);
