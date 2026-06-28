const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)


let arr_a = [[0,0,0],[0,0,0],[0,0,0]]
let arr_b =  [[0,0,0],[0,0,0],[0,0,0]]

let row = 3
let col = 3

let cnt = 0

for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
        arr_a[i][j] = Number(input[cnt])
        cnt++
    }
}

for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
        arr_b[i][j] = Number(input[cnt])
        cnt++
    }
}

let res = ''

for(let i = 0; i < row; i++){
    res = ''
    for(let j = 0; j < col; j++){
        res += arr_a[i][j] *  arr_b[i][j] + ' '
    }
    console.log(res)
}