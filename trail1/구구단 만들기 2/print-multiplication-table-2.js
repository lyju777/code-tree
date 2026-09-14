const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let res = ''

for(let i = 2; i <= 8; i+=2){
    res = ''
    for(let j = B; j >= A; j--){
        res += `${j} * ${i} = ${j*i} `
        if(j > A){
            res += '/ '
        }
    }
    console.log(res)
}