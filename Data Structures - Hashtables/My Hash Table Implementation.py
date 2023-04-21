# Define a HashTable class
class HashTable:
    # Constructor method that initializes a list of size 'size' with None values
    def __init__(self, size):
        self.data = [None] * size

    # Method to print the attributes of the class as a string
    def __str__(self):
        return str(self.__dict__)

    # Method to hash the key
    def _hash(self, key):
        hash = 0
        # Iterate over each character in the key
        for i in range(len(key)):
            # Multiply the character's ASCII value by its position in the string and add it to the hash
            hash = (hash + ord(key[i]) * i) % len(self.data)
        # Return the hash value
        return hash

    # Method to set a key-value pair in the hash table
    def set(self, key, value):
        # Get the hash value of the key
        address = self._hash(key)
        # collision is handled using separate chaining
        # If the bucket at the hash address is empty, create a new list to hold the key-value pair
        if self.data[address] is None:
            self.data[address] = []
        # Append the key-value pair to the bucket
        self.data[address].append([key, value])
        # Return the updated hash table
        return self.data

    # Method to get the value associated with a given key
    def get(self, key):
        # Get the hash value of the key
        address = self._hash(key)
        # Get the bucket at the hash address
        current_bucket = self.data[address]
        # If the bucket is not empty, iterate over its elements to find the key
        if current_bucket:
            for i in range(len(current_bucket)):
                if current_bucket[i][0] == key:
                    # Return the value associated with the key
                    return current_bucket[i][1]
        # If the key is not found, return None
        return None

    # Method to return a list of all keys in the hash table
    def keys(self):
        keys_array = []
        total_items = len(self.data)
        # Iterate over each bucket in the hash table
        for index in range(total_items):
            # If the bucket is not empty, append the key of the first element in the bucket to the keys list
            if self.data[index]:
                keys_array.append(self.data[index][0][0])
        # Return the list of keys
        return keys_array


# Create a new instance of the HashTable class with size 50
myHashTable = HashTable(50)
# Add some key-value pairs to the hash table
myHashTable.set("grapes", 10000)
myHashTable.set("apples", 54)
myHashTable.set("orange", 2)
# Print the hash table's data attribute
print(myHashTable.data)
# Print a list of all keys in the hash table
print(myHashTable.keys())