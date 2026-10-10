const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number)

let N = input[0]

let arr = []

for(let i = 1; i <= N; i++){
    arr.push(input[i])
}

arr.sort((a,b) => b - a)

console.log(`${arr[0]} ${arr[1]}`)