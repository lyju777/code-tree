const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let cnt = 1
let res = ''

for(let i = 0; i < N; i++){
    res = ''
    for(let j = 0; j < i; j++){
        res += '  '
    }

    for(let j = 0; j < N-i; j++){
        res += `${cnt++} `
        if(cnt === 10){
            cnt = 1
        }
    }
    console.log(res)
}