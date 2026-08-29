const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let C = input[0]
let N = Number(input[1])

let res = ''

if(C === 'A'){
    for(let i = 1; i <= N; i++){
        res += i+' '
    }
    console.log(res)
}


if(C === 'D'){
    for(let i = N; i >= 1; i--){
        res += i+' '
    }
    console.log(res)
}