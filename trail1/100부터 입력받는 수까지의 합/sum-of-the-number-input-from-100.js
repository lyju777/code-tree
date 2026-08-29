const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let sum = 0

for(let i = N; i <= 100; i++){
    sum+= i
}
console.log(sum)