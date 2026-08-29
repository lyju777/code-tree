const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])
let sum = 0
let cnt = 0

for(let i = A; i <= B; i++){
    if(i%5 === 0 || i%7 === 0){
        sum += i
        cnt++
    }
}

console.log(`${sum} ${(sum/cnt).toFixed(1)}`)
