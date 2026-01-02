
function sumArray(array) { return array.reduce((prev, curr) => curr + prev) }
function isPalindrome(string) { return string.toLowerCase() === string.toLowerCase().split("").reverse().join("") }
function converts(array) { return array.join(" ") }

function maxDifferenceBwTwoElementsOfArray(array) {
    let max = 0;
    for ( let i = 0; i < array.length; i++ ) {
        for ( let j = i + 1; j < array.length; j++ ) {
            if ( Math.abs(array[j] - array[i]) > max ) { max = Math.abs(array[j] - array[i]) }
        }
    }
    return max;
}

function isPrime(number) {
    for ( let i = 2; i < number/2; i++ ) {
        if ( number % 2 === 0 ) { return false }
    }
    return true;
}

function recursiveFactorial(number) {
    if ( number === 0 ) { return 1 }
    return number * recursiveFactorial(number - 1);
}

function removeDuplicates(array) {
    let outArr = [];
    array.forEach((ele) => { if (!outArr.includes(ele)) {outArr.push(ele)} });
    return outArr;
}

function removeDuplicatesIrrSign(array) {
    let outArr = [];
    array.forEach((ele) => { if (!outArr.includes(Math.abs(ele))) {outArr.push(ele)} });
    return outArr;
}

function mergeArray(arr1, arr2) {
    let outArr = [];
    arr1.forEach((ele) => outArr.push(ele));
    arr2.forEach((ele) => { if (!outArr.includes(ele)) {outArr.push(ele)} });
    return outArr;
}

function destructureMergeArray(arr1, arr2) {
    return removeDuplicates([...arr1, ...arr2]);
}


console.log(sumArray([1, 2, 3, 4, 5]));
console.log(isPalindrome("Huhu"))
console.log(maxDifferenceBwTwoElementsOfArray([1, 2, 3, 4, -9]));
console.log(isPrime(11));
console.log(recursiveFactorial(6));
console.log(removeDuplicates([1, 2, 3, 4, 9, 1]));
console.log(mergeArray([1, 2, 3, 4, 9, 1], [1, 2, 3, 4, -9]));
console.log(removeDuplicates(mergeArray([1, 2, 3, 4, 9, 1], [1, 2, 3, 4, -9])));
console.log(removeDuplicatesIrrSign(mergeArray([1, 2, 3, 4, 9, 1], [1, 2, 3, 4, -9])));
console.log(converts(["Daksh", "Singh", "is", "a", "good", "boy"]));
console.log(destructureMergeArray([1, 2, 3, 4, 9, 1], [1, 2, 3, 4, -9]));
