const fs = require("fs");
let input = fs.readFileSync(0).toString();

let arr = input.split(" ")

let a = Number(arr[0])
let b = Number(arr[1])
let c = Number(arr[2])

let numArr = [a, b, c]

numArr.sort((a,b)=> {
    return a-b
})

console.log(Number(numArr[1]))