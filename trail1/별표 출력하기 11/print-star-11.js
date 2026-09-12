const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''

for(let i = 0; i < (N*2)+1; i++){
    res = ''
    for(let j =0; j < (N*2)+1; j++){
        if(i%2 !== 0 && j%2 !== 0){
            res += '  '
        } else {
            res += '* '
        }
    }
    console.log(res)
}