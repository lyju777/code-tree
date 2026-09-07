const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''

for(let i = 0; i < N; i++){
    res = ''
    for(let j = 0; j <= i; j++){
        res += '* '
    }
    console.log(res)
}

for(let i = 1; i < N; i++){
    res = ''
    for(let j = 1; j <= N-i; j++){
        res += '* '
    }
    console.log(res)
}