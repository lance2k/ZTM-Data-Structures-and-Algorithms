let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
	const length = array.length;

	for (let i = 0; i < length - 1; i++) {
		let minIndex = i;

		for (let j = i + 1; j < length; j++) {
			if (array[minIndex] > array[j]) {
				minIndex = j;
			}
		}
		// if minIndex is different from i (indicating that a smaller element was found)
		// we swap the elements at indices i and minIndex
		if (minIndex !== i) {
			let temp = array[i];
			array[i] = array[minIndex];
			array[minIndex] = temp;
		}
	}

	return array;
}

numbers = selectionSort(numbers);
console.log(numbers);
