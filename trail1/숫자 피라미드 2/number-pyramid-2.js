const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''
let cnt  = 1

for(let i = 0; i < N; i++){
    res = ''
    for(let j = 0; j <= i; j++){
        res += `${cnt++} `
    }
    console.log(res)
}