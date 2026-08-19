const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let a = Number(input[0])

a === 1 ? console.log(`t`) : console.log(`f`)