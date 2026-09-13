const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let res = ''
let cnt = 0

for(let i = 0; i < N; i++){
    res = ''
    if(i % 2 === 0){
        for(let j = 0; j < N; j++){
            res += `${cnt+=1} `
        }
    } else {
        for(let j = 0; j < N; j++){
            res += `${cnt+=2} `
        }
    }
    console.log(res)
}