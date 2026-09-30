const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let sum = 0
let avg = 0
let cnt = 0

for(let i = 0; i < input.length; i++){
    if(i%2 !== 0){
        sum += Number(input[i])
    }

    if((i+1)%3 === 0){
        avg += Number(input[i])
        cnt++
    }
}

console.log(`${sum} ${(avg/cnt).toFixed(1)}`)