const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''

for(let i = 0; i < N; i++){
    res = ''
    for(let j = 0; j < (2 * i); j++){
        res += ' '
    }
    for(let x = 0; x < (2 * N)-(2 * i)-1; x++){
        res += '* '
    }
    console.log(res)
}