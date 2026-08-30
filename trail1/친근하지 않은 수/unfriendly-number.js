const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let cnt = 0

for(let i = 1; i <= N; i++){
    if(i%2 === 0 || i%3 === 0 || i%5 === 0){
        continue;
    }
    cnt++
}
console.log(cnt)