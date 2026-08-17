const fs = require('fs')
let input = fs.readFileSync(0).toString()

let N = Number(input)

console.log((N*30.48).toFixed(1))