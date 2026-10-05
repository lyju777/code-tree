const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let arr = Array(6).fill(0)

for(let i = 0; i < input.length; i++){
    arr[input[i]-1]++
}

for(let i = 0; i < arr.length; i++){
    console.log(`${i+1} - ${arr[i]}`)
}