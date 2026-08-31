const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let idx = 0
let cnt = 0

while(true){
let A = Number(input[idx])

if(A%2 !== 0){
    idx++
    continue;
} else if(A%2 === 0){
    console.log(parseInt(A/2))
    cnt++
    idx++
}

    if(cnt === 3){
        break;
    }
}