const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''

for(let i = 0; i < N; i++){
    res = ''
    for(let j = 0; j < N; j++){
        if(i === 0 || i === N-1 || j === 0 || j === N-1){
            res += '* '
        } else {
            if(i <= j){
                res += '  '
            } else {
                res += '* '
            }
        }
    }
    console.log(res)
}