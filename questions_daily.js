
// Intersection of the array

// function fcn() {
//     return {name: "Daksh"};
// }
//
// console.log(fcn());


const arrayData = [10, 12, 18, 6, 4];

function findIndex(arr, sum) {
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

findIndex(arrayData, 30).forEach((ele) => console.log(ele));
