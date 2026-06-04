const fs = require("fs");
let a = fs.readFileSync(0).toString();
let arr = a.split(" ");

let n = arr[0];
let m = arr[1];

let res

while(n > 0){
    console.log(n)
    n = Math.floor(n / m)
}