const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let n = Number(input[0])
let m = Number(input[1])

for(let i = 0; i < n; i++){
    let star = ''
    for(let y = 0; y < m; y++){
        star += '*' + ' '
    }
    console.log(star)
}