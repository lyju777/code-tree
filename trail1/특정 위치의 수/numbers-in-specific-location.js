const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

console.log(Number(input[2]) + Number(input[4]) + Number(input[9]))