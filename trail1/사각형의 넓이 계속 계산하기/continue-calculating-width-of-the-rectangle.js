const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let idx = 0

while(true){
    w = Number(input[idx])
    h = Number(input[idx+1])
    t = input[idx+2]

    console.log(w*h)
    if(t === `C`){
        break;
    }
    idx+=3
}