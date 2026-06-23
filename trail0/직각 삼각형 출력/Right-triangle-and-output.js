const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let N = Number(input)

for(let i = 0; i < N; i++){
    let star = ''
    for(y = -1; y <= 2*i -1; y++){
        star += '*'
    }
    console.log(star)
}