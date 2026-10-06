const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let M = Number(input[1])

let cnt = 0

for(let i = 2; i <= N+1; i++){
    if(Number(input[i]) === M){
        cnt++
    }
}

console.log(cnt)