def reverse(str):
    reverseArr = []
    totalItems = len(str)-1
    for i in range(totalItems, -1, -1):
        reverseArr.append(str[i])
    return "".join(reverseArr)

str = "I am lance"

print(reverse("I am lance"))
print(str[::-1])