const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)
let arr = []
let res = ''

for(let i = 0; i < n; i++){
    arr[i] = []
    for(let j = 0; j < n; j++){
        arr[i][j] = j+1
    }
    if(i % 2 !== 0){
        arr[i].reverse()
    }
}

for(let i = 0; i < n; i++){
    res = ''
    for(let j = 0; j < n; j++){
        res += arr[i][j]
    }
    console.log(res)
}