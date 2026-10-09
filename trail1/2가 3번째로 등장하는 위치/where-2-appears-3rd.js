const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let cnt = 0

for(let i = 1; i <= N; i++){
    if(Number(input[i]) === 2){
        cnt++
    }

    if(cnt === 3){
        console.log(i)
        break;
    }
}