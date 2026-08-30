const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let prod = 1
let last

for(let i = 1; i <= 10; i++){
    prod *= i
    last = i
    if(prod >= N){
        break;
    }
}
console.log(last)