const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let width = Number(input[0])
let height = Number(input[1])

console.log(width+=8)
console.log(height*=3)
console.log((width)*(height))