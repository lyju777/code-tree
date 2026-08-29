const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let res = ''

if(A < B){
    for(let i = B; i >= A; i--){
        res += i+' '
    }
    console.log(res)
} else{
    for(let i = A; i >= B; i--){
        res += i+' '
    }
    console.log(res)
}