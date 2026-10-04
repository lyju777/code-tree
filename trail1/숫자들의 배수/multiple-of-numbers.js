const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let arr = []
let x = Number(input[0])
let res = ''
let check_cnt = 0

while(check_cnt !== 2){
    if(x%5 === 0){
        check_cnt++
    }
    arr.push(x)
    x += Number(input[0])
}

for(let i = 0; i < arr.length; i++){
    res += arr[i] + ' '
}
console.log(res)

