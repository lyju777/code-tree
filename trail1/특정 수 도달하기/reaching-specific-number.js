const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let sum = 0
let cnt = 0

for(let i = 0; i < input.length; i++){
    if(Number(input[i]) >= 250){
        break;
    }
    sum += Number(input[i])
    cnt++
}

console.log(`${sum} ${(sum/cnt).toFixed(1)}`)