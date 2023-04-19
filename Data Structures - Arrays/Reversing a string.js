function reverse(str){
    //check input
    if(!str || str.length < 2 || typeof str !== "string"){
        return "Invalid input."
    }
    const reverseArr = [];
    const totalItems = str.length-1;
    for (let index = totalItems; index >= 0; index--) {
        reverseArr.push(str[index]);
    }
    return reverseArr.join("");
}

function reverse2(str){
    //check input
    if(!str || str.length < 2 || typeof str !== "string"){
        return "Invalid input."
    }

    return str.split("").reverse().join("");
}

const reverse3 = str => [...str].reverse().join("");

console.log(reverse3('Hello World!'));