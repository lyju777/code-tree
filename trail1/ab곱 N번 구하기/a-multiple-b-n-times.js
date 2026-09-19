const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let idx = 1
let res = 1

for(let i = 1; i <= N; i++){
    res = 1

    let a = Number(input[idx++])
    let b = Number(input[idx++])

    for(let j = a; j <= b; j++){
        res*=j
    }
    console.log(res)
}