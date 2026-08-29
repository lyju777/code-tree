const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

let res = ''

if(A > 0){
    for(let i = 0; i < B; i++){
        res += A
    }
    console.log(res)
} 

if(A <= 0){
    console.log(0)
}