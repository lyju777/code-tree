const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

for(let i = 1; i <= N; i++){
    res = ''
    for(let j = 1; j <= i; j++){
        res += `${i*j} `
    }
    console.log(res)
}