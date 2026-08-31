const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let idx = 0
let cnt = 0
let sum = 0

while(true){
    A = Number(input[idx])
    
    if(parseInt(A/10) !== 2){
        break;
    }
    sum+=A
    cnt++
    idx++
}
console.log((sum/cnt).toFixed(2))
