const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let res = ''
let num = 11
let next_num = 11

for(let i = 0; i < N; i++){
    if(i !== 0){
      next_num+=2
      num = next_num
    }
    res = ''
    for(let j = 0; j < N; j++){
        res += `${num} `
        num+=2 
    }
    console.log(res)
}