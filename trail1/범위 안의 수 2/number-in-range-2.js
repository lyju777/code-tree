const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let sum = 0
let cnt = 0

let arr = input.map(Number)

for(let i = 0; i < 10; i++){
    if(0 <= input[i] && input[i] <= 200){
        sum += arr[i]
        cnt++
    }
}
console.log(`${sum} ${(sum/cnt).toFixed(1)}`)
