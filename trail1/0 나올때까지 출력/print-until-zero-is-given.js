const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let idx = 0

while(true){
    let A = Number(input[idx])
    if(A === 0){
        break;
    }
    console.log(A)
    idx++
}

