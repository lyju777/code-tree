const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let a = Number(input[0])
let b = Number(input[1])
let c = Number(input[2])

console.log(a+b+c)
console.log((a+b+c)/input.length)
console.log((a+b+c)-((a+b+c)/input.length))