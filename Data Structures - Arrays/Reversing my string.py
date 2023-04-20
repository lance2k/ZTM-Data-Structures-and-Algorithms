def reverse(str):
    reverseArr = []
    totalItems = len(str)-1
    for i in range(totalItems, -1, -1):
        reverseArr.append(str[i])
    return "".join(reverseArr)

print(reverse("I am lance"))