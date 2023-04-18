strings = ['a','b','c','d']
// 4*4 = 16 bytes of storage is used

console.log(strings[2])

//push  
strings.push('e')      // O(1)
//pop  
strings.pop() 
strings.pop()            // O(1)

//addfirstelement 
strings.unshift('x')    //O(n)

//splice
strings.splice(2, 0, 'alien')   //O(n)

console.log(strings)

//Array native javascript methods :-
// concat(): Combines two or more arrays and returns a new array.
// Example:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const newArr = arr1.concat(arr2);
// console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]
// filter(): Returns a new array containing elements that pass a specified test.
// Example:
// const arr = [1, 2, 3, 4, 5];
// const filteredArr = arr.filter(num => num % 2 === 0);
// console.log(filteredArr); // Output: [2, 4]
// find(): Returns the value of the first element in an array that satisfies a provided testing function.
// Example:
// const arr = [1, 2, 3, 4, 5];
// const foundValue = arr.find(num => num > 3);
// console.log(foundValue); // Output: 4
// forEach(): Calls a function for each element in an array.
// Example:
// const arr = [1, 2, 3];
// arr.forEach(num => console.log(num));
// // Output:
// // 1
// // 2
// // 3
// includes(): Determines whether an array includes a certain value.
// Example:
// const arr = [1, 2, 3];
// const includesTwo = arr.includes(2);
// console.log(includesTwo); // Output: true
// indexOf(): Returns the index of the first occurrence of a specified value in an array, or -1 if it is not found.
// Example:
// const arr = [1, 2, 3];
// const index = arr.indexOf(2);
// console.log(index); // Output: 1
// join(): Joins all elements of an array into a string.
// Example:
// const arr = [1, 2, 3];
// const str = arr.join('-');
// console.log(str); // Output: "1-2-3"
// map(): Returns a new array with the results of calling a provided function on every element in the array.
// Example:
// const arr = [1, 2, 3];
// const mappedArr = arr.map(num => num * 2);
// console.log(mappedArr); // Output: [2, 4, 6]
// pop(): Removes the last element from an array and returns that element.
// Example:
// const arr = [1, 2, 3];
// const poppedElement = arr.pop();
// console.log(poppedElement); // Output: 3
// console.log(arr); // Output: [1, 2]
// push(): Adds one or more elements to the end of an array and returns the new length of the array.
// Example:
// const arr = [1, 2, 3];
// const newLength = arr.push(4, 5);
// console.log(newLength); // Output: 5
// console.log(arr); // Output: [1, 2, 3, 4, 5]
// reduce(): Applies a function to each element of an array and reduces the array to a single value.
// Example:
// const arr = [1, 2, 3];
// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(sum); // Output: 6
// reverse(): Reverses the order of the elements in an array.
// Example:
// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // Output: [3, 2, 1]
// shift(): Removes the first element from an array and returns that element.
// Example:
// const arr = [1, 2, 3];
// const shiftedElement = arr.shift();
// console.log(shiftedElement); // Output: 1
// console.log(arr); // Output: [2, 3]
// slice(): Returns a shallow copy of a portion of an array into a new array.
// Example:
// const arr = [1, 2, 3, 4, 5];
// const slicedArr = arr.slice(1, 4);
// console.log(slicedArr); // Output: [2, 3, 4]
// some(): Returns true if at least one element in an array satisfies a provided testing function.
// Example:
// const arr = [1, 2, 3, 4, 5];
// const someAreEven = arr.some(num => num % 2 === 0);
// console.log(someAreEven); // Output: true
// sort(): Sorts the elements of an array in place and returns the sorted array.
// Example:
// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// arr.sort();
// console.log(arr); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]
// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// Example:
// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1, 'a', 'b');
// console.log(arr); // Output: [1, 2, 'a', 'b', 4, 5]
// toString(): Converts an array to a string.
// Example:
// const arr = [1, 2, 3];
// const str = arr.toString();
// console.log(str); // Output: "1,2,3"
// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
// Example:
// const arr = [1, 2, 3];
// const newLength = arr.unshift(0, -1);
// console.log(newLength); // Output: 5
// console.log(arr); // Output: [-1, 0, 1, 2, 3]
