const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let n1 = input[0]
let n2 = input[1].split(' ').map(x => Number(x * x))

let res = ''

for(let i = 0; i < n2.length; i++){
    res += n2[i] + ' '
}

console.log(res)
