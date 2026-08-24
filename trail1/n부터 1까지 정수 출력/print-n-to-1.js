const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let n = Number(input[0])

let res = ''

while(n >= 1){
    res += n + ' '
    n--
}
console.log(res)