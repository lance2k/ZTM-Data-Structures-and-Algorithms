def firstRecurringCharacter(array):
    totalItems = len(array)-1
    firstRC = None
    for i in range(totalItems):
        for j in range(i+1, totalItems):
            if array[i] == array[j]:
                if firstRC is None or firstRC > j:
                    firstRC = j
    if firstRC:
        return array[firstRC]
    return None

def firstRecurringCharacter2(array):
    totalItems = len(array)-1
    my_dict = {}
    for i in range(totalItems):
            if array[i] in my_dict:
                return array[i]
            my_dict[array[i]] = i
    return None    

print(firstRecurringCharacter2([2,5,1,2,3,5,1,2,4])); # Output: 2
print(firstRecurringCharacter2([2,1,1,2,3,5,1,2,4])); # Output: 1
print(firstRecurringCharacter2([2,3,4,5])); # Output: None
print(firstRecurringCharacter2([2,5,5,2,3,5,1,2,4])); # Output: 5