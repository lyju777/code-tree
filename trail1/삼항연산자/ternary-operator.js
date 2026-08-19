const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let res = Number(input[0])

res === 100 ? console.log(`pass`) : console.log(`failure`)