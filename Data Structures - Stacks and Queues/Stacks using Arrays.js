class Stack {
	constructor() {
		this.array = [];
	}
	peek() {
		if (this.isEmpty()) {
			return "Stack is empty";
		}
		return this.array[this.array.length - 1];
	}
	push(value) {
		this.array.push(value);
	}
	pop() {
		this.array.pop();
	}
	printList() {
		console.log(this.array);
	}
	isEmpty() {
		if (this.array.length == 0) {
			return true;
		}
		return false;
	}
}

const myStack = new Stack();
myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
myStack.printList();
console.log(myStack.peek());
myStack.pop();
myStack.pop();
myStack.pop();
myStack.printList();
console.log(myStack);

//Discord
//Udemy
//google
