const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])
let A = 65
let res = ''

for(let i = 0; i < N; i++){
    res = ''
    for(let j = 0; j < i; j++){
        res += '  '
    }
    for(let j = 0; j < N-i; j++){
        res += `${String.fromCharCode(A++)} `
        if(A > 90){
            A = 65
        }
    }
    console.log(res)
}