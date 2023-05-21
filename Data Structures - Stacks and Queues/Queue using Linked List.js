class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek() {
		if (this.isEmpty()) {
			return "Queue is empty!";
		}
		return this.first;
	}
	enqueue(value) {
		const newNode = new Node(value);
		if (this.isEmpty()) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
	}
	dequeue() {
		if (this.isEmpty()) {
			return "Queue is empty!";
		}
		if (this.first === this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.length--;
	}
	isEmpty() {
		if (this.length < 1) {
			return true;
		}
		return false;
	}
	printList() {
		const array = [];
		let currentNode = this.first;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		console.log(array);
	}
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");
myQueue.printList();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.printList();
console.log(myQueue);
//Joy
//Matt
//Pavel
//Samir
