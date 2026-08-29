const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])

let cnt = 0

for(let i = 0; i < 5; i++){
    if(Number(input[i])%2 === 0){
        cnt++
    }
}
console.log(cnt)