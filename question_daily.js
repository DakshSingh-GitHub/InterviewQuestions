
function fnc(x, y) {
    console.log(arguments)
    arguments[1] = 15;
    console.log(arguments);
    return x + y;
}

console.log(fnc(5, 5));

