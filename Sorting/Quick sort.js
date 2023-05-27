const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array) {
	// Base case: return array if it has one or fewer elements
	if (array.length <= 1) {
		return array;
	}

	// Choose the pivot element as the middle element
	const pivotIndex = Math.floor(array.length / 2);
	const pivot = array[pivotIndex];

	// Create two subarrays: one containing elements less than or equal to the pivot, and one containing elements greater than the pivot
	const less = [];
	const greater = [];
	for (let i = 0; i < array.length; i++) {
		if (i === pivotIndex) {
			// Skip the pivot element
			continue;
		}

		const current = array[i];
		if (current <= pivot) {
			less.push(current);
		} else {
			greater.push(current);
		}
	}

	// Recursively sort the subarrays
	return [...quickSort(less), pivot, ...quickSort(greater)];
}

// Call the quickSort function and print the sorted array
const sortedNumbers = quickSort(numbers);
console.log(sortedNumbers);
