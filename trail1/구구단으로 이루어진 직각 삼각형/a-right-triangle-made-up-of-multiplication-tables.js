const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let res = ''

for(let i = 1; i <= N; i++){
    res = ''
    for(let j = 1; j <= (N-i)+1; j++){
        if(j === (N-i)+1){
           res += `${i} * ${j} = ${i*j} `
        } else {
           res += `${i} * ${j} = ${i*j} / `
        }
    }
    console.log(res)
}