const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let res = ''
let arr = []

let N = Number(input[0])

for(let i = 1; i <= N; i++){
    arr.push(Number(input[i]) * Number(input[i]))
}


for(let i = 0; i < arr.length; i++){
    res += arr[i] + ' '
}
console.log(res)