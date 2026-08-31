const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let cnt = 0

while(true){
    if(N%2 === 0){
        N*=3
        N+=1
        cnt++
        if(N >= 1000){
            break;
        }
    } else if(N%2 !== 0){
        N*=2
        N+=2
        cnt++
        if(N >= 1000){
            break;
        }
    }
}
console.log(cnt)