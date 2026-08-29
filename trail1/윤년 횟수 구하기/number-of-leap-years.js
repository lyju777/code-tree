const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let cnt = 0

for(let i = 1; i <= N; i++){

    if(i%100 === 0 && i%400 !== 0){
        continue;
    }
    else if(i%4 === 0){
        cnt++
    } 
}
console.log(cnt)