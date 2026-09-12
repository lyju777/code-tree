const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let N = Number(input[0])

let res = ''

for(let i = 1; i <= N; i++){
    res = ''
    if(i % 2 === 0){
        for(let j = 0; j < i; j++){
            res += "* "
        }
    } else {
        res += '*'
    }
    console.log(res)
}