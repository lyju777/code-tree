const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let res = ''

for(let i = 0; i < N; i++){
    res = ''
    if(i%2 === 0){
        for(let j = 0; j < N; j++){
            res += j + 1
        }
    } else {
        for(let j = N; j > 0; j--){
            res += (j+1) - 1
        } 
    }
    console.log(res)
}