const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let res = ''

for(let i = 0; i < N; i++){
    res = ''
    for(let j = 0; j < (N-i)-1; j++){
        res += '  '
    }
    for(let x = 0; x < (2*i)+1; x++){
        res += '* '
    }
    console.log(res)
}