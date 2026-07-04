const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

const row = 4
const col = 4

let arr = []
let cnt = 0
let sum = 0


for(let i = 0 ; i < row; i++){
    arr[i] = []
    for(let j = 0; j < col; j++){
        arr[i][j] = Number(input[cnt++])
    }
}

for(let i = 0; i < row; i++){
    for(let j = 0; j <= i; j++){
        sum += arr[i][j]
      }
    }
console.log(sum)