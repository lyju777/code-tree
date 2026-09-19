const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let start = Number(input[0])
let end = Number(input[1])
let cnt = 0
let res = 0

for(let i = start; i <= end; i++){
    cnt = 0
    for(let j = 1; j <= i; j++){
        if(i%j === 0){
            cnt++
        }
    }
    if(cnt === 3){
        res++
    }
}
console.log(res)
