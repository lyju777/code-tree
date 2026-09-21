const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let sum = 0
let idx = 0

for(let i = 0; i < 10; i++){
    sum += Number(input[idx++])
}

console.log(sum)