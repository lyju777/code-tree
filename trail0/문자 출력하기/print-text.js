const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let a = input

for(let i = 0; i < 8; i++){
    process.stdout.write(a)
}