const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let num = B
let res = ''

for(let i = 1; i <= 9; i++){
    num = B
    res = ''
    for(let j = i; j < i+1; j++){
        while(A <= num){
            res += `${num} * ${j} = ${num*j} `
            if(A < num){
                res += '/ '
            }
            num-=2
        }
    }
    console.log(res)
}