class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}
	peek() {
		if (this.isEmpty()) {
			return "Stack is empty";
		}
		return this.top;
	}
	push(value) {
		const newNode = new Node(value);

		if (this.length == 0) {
			this.bottom = newNode;
			this.top = this.bottom;
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer;
		}
		this.length++;
		return this;
	}
	pop() {
		if (this.isEmpty()) {
			return "Stack is empty";
		}
		if (this.top === this.bottom) {
			this.bottom = null;
		}
		// const holdingPointer = this.top;
		this.top = this.top.next;
		this.length--;
		return this;
	}

	printList() {
		const array = [];
		let currentNode = this.top;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		console.log(array);
	}
	isEmpty() {
		if (this.top == null) {
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
