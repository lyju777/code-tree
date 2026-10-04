const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

console.log(`${input[1]} ${input[4]} ${input[7]}`)