const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let prod = 1
let cnt = 0

while(true){
    if(N === prod){
        break;
    }
    prod*=2
    cnt++
}
console.log(cnt)