
let x = 20;

function fnc() {
    console.log(x);
    let x = 10;
}

fnc();

console.log(x);