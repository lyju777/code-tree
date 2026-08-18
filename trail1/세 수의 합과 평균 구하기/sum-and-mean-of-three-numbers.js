const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])
let C = Number(input[2])

console.log(A+B+C)
console.log(parseInt((A+B+C)/input.length))