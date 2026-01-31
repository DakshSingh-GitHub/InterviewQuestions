
export function sumArray(array) { return array.reduce((prev, curr) => curr + prev) }
export function isPalindrome(string) { return string.toLowerCase() === string.toLowerCase().split("").reverse().join("") }
export function converts(array) { return array.join(" ") }
export function findSubstring(arr) { return arr[0].includes(arr[1]) }

export function maxDifferenceBwTwoElementsOfArray(array) {
    let max = 0;
    for ( let i = 0; i < array.length; i++ ) {
        for ( let j = i + 1; j < array.length; j++ ) {
            if ( Math.abs(array[j] - array[i]) > max ) { max = Math.abs(array[j] - array[i]) }
        }
    }
    return max;
}

export function isPrime(number) {
    for ( let i = 2; i < number/2; i++ ) {
        if ( number % 2 === 0 ) { return false }
    }
    return true;
}

export function recursiveFactorial(number) {
    if ( number === 0 ) { return 1 }
    return number * recursiveFactorial(number - 1);
}

export function removeDuplicates(array) {
    let outArr = [];
    array.forEach((ele) => { if (!outArr.includes(ele)) {outArr.push(ele)} });
    return outArr;
}

export function removeDuplicatesIrrSign(array) {
    let outArr = [];
    array.forEach((ele) => { if (!outArr.includes(Math.abs(ele))) {outArr.push(ele)} });
    return outArr;
}

export function mergeArray(arr1, arr2) {
    let outArr = [];
    arr1.forEach((ele) => outArr.push(ele));
    arr2.forEach((ele) => { if (!outArr.includes(ele)) {outArr.push(ele)} });
    return outArr;
}

export function destructureMergeArray(arr1, arr2) {
    return removeDuplicates([...arr1, ...arr2]);
}

export function fibonacci(number) {
    let num = [];
    num[0] = 0; num[1] = 1;
    for (let i = 2; i < number+1; i++) {
        num[i] = num[i-1] + num[i-2];
    }
    return num;
}
export function sumOfFibonacciNumbers(number) { return fibonacci(number).reduce((prev, curr) => prev + curr) }

export function findIndex(arr, sum) {
    let res_set = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                res_set.push([i, j])
            }
        }
    }
    return res_set;
}

// console.log(sumArray([1, 2, 3, 4, 5]));
// console.log(isPalindrome("Huhu"))
// console.log(maxDifferenceBwTwoElementsOfArray([1, 2, 3, 4, -9]));
// console.log(isPrime(11));
// console.log(recursiveFactorial(6));
// console.log(removeDuplicates([1, 2, 3, 4, 9, 1]));
// console.log(mergeArray([1, 2, 3, 4, 9, 1], [1, 2, 3, 4, -9]));
// console.log(removeDuplicates(mergeArray([1, 2, 3, 4, 9, 1], [1, 2, 3, 4, -9])));
// console.log(removeDuplicatesIrrSign(mergeArray([1, 2, 3, 4, 9, 1], [1, 2, 3, 4, -9])));
// console.log(converts(["Daksh", "Singh", "is", "a", "good", "boy"]));
// console.log(destructureMergeArray([1, 2, 3, 4, 9, 1], [1, 2, 3, 4, -9]));
// console.log(findSubstring(["Daksh", "sh"]));
// console.log(fibonacci(10));
// console.log(sumOfFibonacciNumbers(10));
