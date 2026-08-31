const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let cnt = 0

while(true){

    if(N === 1){
        break;
    }

    if(N%2 === 0){
        parseInt(N/=2)
        cnt++
    } else if(N%2 !== 0){
        N*=3
        N+=1
        cnt++
    }
}
console.log(cnt)