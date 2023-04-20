function mergeSortedArrays(arr1, arr2) {
    if (arr1.length === 0) {
        return arr2;
    }
    if (arr2.length === 0) {
        return arr1;
    }
    const sortedArr = [];
    let index = 0, j = 0;
    let arr1Item = arr1[0], arr2Item = arr2[0];

    while (arr1Item || arr2Item) {
        if (!arr2Item || arr1Item < arr2Item) {
            sortedArr.push(arr1Item);
            index++;
            arr1Item = arr1[index];
        } else {
            sortedArr.push(arr2Item);
            j++;
            arr2Item = arr2[j];
        } 
    }
    return sortedArr
}
function mergeSortedArrays2(arr1, arr2) {
    const sortedArr = arr1.concat(arr2);

    return sortedArr.sort((a,b) => a - b);
}

console.log(mergeSortedArrays([0,3,4], [4,6,30]));
console.log(mergeSortedArrays2([0,3,4], [4,6,30]));