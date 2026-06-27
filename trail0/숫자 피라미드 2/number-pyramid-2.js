const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let res = '' // 출력값
let cnt = 1 // 반복 횟수

for(let i = 1; i <= n; i++){
    res = ''
    for(let y = 1; y <= i; y++){
        res += cnt + ' '
        cnt++
    }
    console.log(res)
}