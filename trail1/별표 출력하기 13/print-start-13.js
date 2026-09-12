const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''

for(let i = 1; i <= N*2; i++){
        res = ''
    if(i%2 !== 0){
        for(let j = 0; j < N - (i/2); j++){ // 홀수 1.3.5.7
            res += '* '
        }
    } else {
        for(let j = 0; j < (i/2); j++){ // 홀수 2,4,6,8
            res += '* '
        }
    }
    console.log(res)
}
