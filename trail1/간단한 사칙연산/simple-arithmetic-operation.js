const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

console.log(A+B)
console.log(A-B)
console.log(parseInt(A/B))
console.log(A%B)