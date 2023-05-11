class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = new Node(value);
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head.prev = newNode;
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
		newNode.prev = prevNode;
		newNode.next = currentNode;
		currentNode.prev = newNode;
		this.length++;
	}
	remove(index) {
		if (index >= this.length) {
			return console.log("Invalid index!");
		}
		let prevNode = this.traverseToIndex(index - 1);
		const targetNode = prevNode.next;
		const holder = targetNode.next;
		prevNode.next = holder;
		holder.prev = prevNode;
		this.length--;
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

let myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.insert(20, 80);
myDoublyLinkedList.printList();
myDoublyLinkedList.remove(2);
myDoublyLinkedList.remove(20);
myDoublyLinkedList.printList();
// console.log(myDoublyLinkedList);
