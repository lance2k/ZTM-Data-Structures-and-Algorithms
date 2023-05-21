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
	reverse() {
		// If the list has less than two nodes, it's already reversed
		if (this.length < 2) {
			return this;
		}

		// Initialize variables to reverse the list
		let previousNode = null;
		let currentNode = this.head;
		let nextNode = null;

		// Traverse the list and reverse each node's "next" pointer
		while (currentNode != null) {
			// Save the next node before we change the current node's "next" pointer
			nextNode = currentNode.next;

			// Reverse the current node's "next" pointer to point to the previous node
			currentNode.next = previousNode;

			// Move to the next node in the list
			previousNode = currentNode;
			currentNode = nextNode;
		}

		// Update the head and tail pointers to reflect the reversed list
		this.tail = this.head;
		this.head = previousNode;
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
console.log(myLinkedList);
