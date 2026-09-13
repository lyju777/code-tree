const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let cnt_plus = 1
let cnt_minus = N
let res = ''

for(let i = 0; i < N; i++){
    if(i !== 0){
        cnt_plus++
        cnt_minus--
    }
    res = ''
    for(let j = 0; j < N; j++){
        if(j%2 === 0){
           res += `${cnt_plus}`
        } else {
           res += `${cnt_minus}`
        }
    }
    console.log(res)
}
