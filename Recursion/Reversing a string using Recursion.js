//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
	let revStr = "";
	for (let index = str.length - 1; index >= 0; index--) {
		revStr += str[index];
	}
	return revStr;
}
function reverseStringR(str) {
	if (str.length == 0) {
		return str;
	}
	return reverseStringR(str.substring(1)) + str[0];
}
console.log(reverseString("yoyo mastery"));
console.log(reverseStringR("yoyo mastery"));
//should return: 'yretsam oyoy'
