const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

for(let i = 0; i < N; i++){
    res = ''
    for(let j = 0; j < N; j++){
        res += i+1
    }
    console.log(res)
}