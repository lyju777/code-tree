const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 0; i < n; i++){
    let star = ''
    for(let y = 0; y < n-i; y++){
        star += '*' + ' '
    }
    console.log(star)
}

