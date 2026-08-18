const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('.')

let yyyy = input[0]
let mm = input[1]
let dd = input[2]

console.log(`${mm}-${dd}-${yyyy}`)