

function countVowels(string) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    string
        .toLowerCase()
        .split("")
        .forEach((ele) => {if (vowels.includes(ele)) { count += 1 }});
    return count;
}
console.log(countVowels("ABCDE"));

const arr = [1, 2, 3, 4, 5]
const k = 2;

const result = arr.slice(k).concat(arr.splice(0, k));
console.log(result);

const users = [
    { id: 1, name: "Daksh Singh" },
    { id: 2, name: "Manas Mangla" }
]

let obj = {}
users.forEach((ele) => obj[ele.id] = ele);
console.log(obj);
