const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let idx = 0
let bool = false

for(let i = idx; i < 5; i++){
    let A = Number(input[idx])
    if(A%3 !== 0){
        bool = true
        break;
    }
    idx++
}

if(bool === true){
    console.log(0)
} else {
    console.log(1)
}