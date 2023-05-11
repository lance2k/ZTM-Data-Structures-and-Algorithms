class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}
	insert(index, value) {
		//Code here
		if (index >= this.length) {
			return this.append(value);
		}
		const newNode = new Node(value);
		let currentNode = this.traverseToIndex(index - 1);
		let prevNode = currentNode;
		currentNode = currentNode.next;
		prevNode.next = newNode;
		newNode.next = currentNode;
		this.length++;
	}
	remove(index) {
		if (index >= this.length) {
			return console.log("Invalid index!");
		}
		let prevNode = this.traverseToIndex(index - 1);
		const targetNode = prevNode.next;
		prevNode.next = targetNode.next;
		this.length--;
	}
	reverse(index) {
		if (this.length < 2) {
			return this;
		}
		let prevNode = null;
		this.tail = this.head;
		while (this.head != null) {
			var temp = this.head;
			this.head = this.head.next;
			temp.next = prevNode;
			prevNode = temp;
		}
		this.head = temp;
	}
	traverseToIndex(index) {
		let currentNode = this.head;
		for (let i = 0; i < index; i++) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}
	printList() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		console.log(array);
	}
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 80);
myLinkedList.printList();
myLinkedList.remove(2);
myLinkedList.remove(20);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();
// console.log(myLinkedList);
