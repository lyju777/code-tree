const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let sum = 0
let cnt = 0

for(let i of input){
    sum+= Number(i)
    cnt++
}
console.log((sum/cnt).toFixed(1))