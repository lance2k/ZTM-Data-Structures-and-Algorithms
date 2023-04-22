class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self, data):
        self.head = Node(data)
        self.tail = self.head
        self.length = 1

    def append(self, data):
        new_node = Node(data)
        self.tail.next = new_node
        self.tail = new_node
        self.length += 1

    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
        self.length += 1

    def insert(self, index, data):
        if index >= self.length:
            return self.append(data)
        new_node = Node(data)
        prev_node = self.traverse_to_index(index-1)
        new_node.next = prev_node.next
        prev_node.next = new_node
        self.length += 1

    def traverse_to_index(self, index):
        current_node = self.head
        for i in range(index):
            current_node = current_node.next
        return current_node
    
    def remove(self, index):
        if index >= self.length:
            return print("Invalid index!")
        prev_node = self.traverse_to_index(index-1)
        target_node = prev_node.next
        prev_node.next = target_node.next
        self.length -= 1
    
    def print_list(self):
        array = []
        current_node = self.head
        while(current_node is not None):
            array.append(current_node.data)
            current_node = current_node.next
        print(array)


myLinkedList = LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 80);
myLinkedList.print_list();
myLinkedList.remove(2);
myLinkedList.remove(20);
myLinkedList.print_list();