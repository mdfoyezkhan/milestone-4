let a = 5;
let b = 7;
console.log(a,b)
const pemp = a;
a = b;
b = pemp;
console.log(a, b)
//--------------
let x = 5;
let y = 7;
console.log(x, y);
[x, y] = [y, x]
console.log(x, y)
