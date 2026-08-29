const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])
let trim = 0

let sum = 0

if(A > B){
    trim = B
    B = A
    A = trim 
}

for(let i = A; i <= B; i++){
    if(i%5 === 0){
        sum+=i
    }
}
console.log(sum)
