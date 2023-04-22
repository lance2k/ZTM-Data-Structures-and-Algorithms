//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
    const totalItems = input.length;
    let firstRC = null;
    for (let index = 0; index < totalItems; index++) {
        for (let j = index+1; j < totalItems; j++) {
            if (input[index] === input[j]) {
                if (firstRC === null || firstRC > j) {
                    firstRC = j;
                }
            }
        }
    }
    if (firstRC) {
        return input[firstRC];
    }
    return undefined;
}

function firstRecurringCharacter2(input) {
    const myMap = new Map();
    const totalItems = input.length;
    for (let index = 0; index < totalItems; index++) {
        if (myMap.has(input[index])) {
            return input[index];
        }
        myMap.set(input[index], true);
    }
    return undefined;
}
console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4])); // Output: 2
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4])); // Output: 1
console.log(firstRecurringCharacter([2,3,4,5])); // Output: undefined
console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4])); // Output: 5

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2