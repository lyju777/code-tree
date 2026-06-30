const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let n = Number(input[0])
let m = Number(input[1])

let arr_1 = []
let arr_2 = []

let arrNum = 2;
let res = ''

for(let i = 0; i < n; i++){
    arr_1[i] = []
    for(let j = 0; j < m; j++){
        arr_1[i][j] = Number(input[arrNum])
        arrNum++
    }
}

for(let i = 0; i < n; i++){
    res = ''
    for(let j = 0; j < m; j++){
        if(arr_1[i][j] === Number(input[arrNum])){
            res += '0' + ' '
        } else{
            res += '1' + ' '
        }
        arrNum++
    }
    console.log(res)
}