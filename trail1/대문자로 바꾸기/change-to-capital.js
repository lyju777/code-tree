const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let res = ''

for(let i = 0; i < 5; i++){
    res = ''
    let arr = input[i].split(' ')
    for(let j = 0; j < 3; j++){
        res += arr[j].toUpperCase() + ' '
    }
    console.log(res)
}