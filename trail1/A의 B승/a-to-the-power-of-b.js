const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let prod = 1

for(let i = 1; i <= B; i++){
    prod *= A
}
console.log(prod)