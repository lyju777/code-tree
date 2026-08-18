const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('-')

let a = input[0]
let b = input[1]
let c = input[2]

console.log(`${a}-${c}-${b}`)