const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let sum = 0

for(let i = A; i <= B; i++){
    sum+=i
}
console.log(sum)