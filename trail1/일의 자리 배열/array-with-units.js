const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let arr = Array(10)
let res = ''

arr[0] = Number(input[0])
arr[1] = Number(input[1])

for(let i = 2; i < arr.length; i++){
    arr[i] = (arr[i-1] + arr[i-2])%10 
}

for(let i = 0; i < arr.length; i++){
    res += arr[i] + ' ' 
}

console.log(res)
