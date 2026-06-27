const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let start = Number(input[0])
let end = Number(input[1])

let res = 0;
let cnt = 0;

for(let i = start; i <= end; i++){
    cnt = 0
    
    for(let y = 1; y <= i; y++){
        if(i % y === 0){
            cnt++
        }
    }
    if(cnt === 3){
        res++
    }
}
console.log(res)