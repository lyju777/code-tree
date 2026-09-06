const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''

for(let i = 0; i < N; i++){
    res=''
    for(let j = 0; j < N; j++){
        res+='*'
    }
    console.log(res)
}