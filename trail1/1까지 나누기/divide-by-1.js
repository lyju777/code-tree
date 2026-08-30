const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let cnt = 0

for(let i = 1; i <= 100; i++){
    N = parseInt(N/i)
    cnt++
    if(N <= 1){
        break;
    }
}
console.log(cnt)