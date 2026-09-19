const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let M = Number(input[0])
let idx = 1
let cnt = 0


for(let i = 0; i < M; i++){
    let N = Number(input[idx++])
    cnt = 0
    while(N !== 1){
        if(N%2 === 0){
            N/=2
            cnt++
        } else {
            N = (N*3)+1
            cnt++
        }
    }
    console.log(cnt)
}
