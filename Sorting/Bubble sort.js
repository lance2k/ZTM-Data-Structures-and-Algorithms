let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
	const length = array.length;
	let swapped = false;

	for (let i = 0; i < length - 1; i++) {
		for (let j = 0; j < length - i - 1; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				swapped = true;
			}
		}

		// If no two elements were swapped in the inner loop, the array is already sorted
		if (!swapped) {
			break;
		}
	}

	return array;
}

numbers = bubbleSort(numbers);
console.log(numbers);
