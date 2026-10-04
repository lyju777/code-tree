const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

arr = []

arr[0] = Number(input[0])
arr[1] = Number(input[1])

for(let i = 2; i < 10; i++){
    arr[i] = arr[i -1] + 2*(arr[i - 2])
}

console.log(arr.join(' '))