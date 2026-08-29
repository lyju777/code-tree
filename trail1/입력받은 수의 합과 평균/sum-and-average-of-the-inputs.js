const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)


let arr = input.map(Number)
let N = arr[0]

let sum = 0

for(let i = 1; i < arr.length; i++){
    sum += arr[i]
}
console.log(`${sum} ${(sum/N).toFixed(1)}`)