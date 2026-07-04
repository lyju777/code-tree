const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

const row = 4
const col = 4

let arr = []
let cnt = 0
let res = 0

for(let i = 0; i < row; i++){
    arr[i] = []
    for(let j = 0; j < col; j++){
        arr[i][j] = input[cnt++]
        if(arr[i][j] % 5 === 0){
            res++
        }
    }
}
console.log(res)