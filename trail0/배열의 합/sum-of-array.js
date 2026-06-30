const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let cnt = 0
let arr = []
let sum = 0

for(let i = 0; i < 4; i++){
    arr[i] = []
    sum = 0
    for(let j = 0; j < 4; j++){
        arr[i][j] = Number(input[cnt])
        cnt++
        sum += arr[i][j]
    }
    console.log(sum)
}

