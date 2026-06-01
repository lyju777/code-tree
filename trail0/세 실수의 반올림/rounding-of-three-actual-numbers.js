const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

let a = input[0];
let b = input[1];
let c = input[2];

console.log(Number(a).toFixed(3))
console.log(Number(b).toFixed(3))
console.log(Number(c).toFixed(3))