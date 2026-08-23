const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])

if(A === 0){
    if(B >= 19){
        console.log('MAN')
    } else {
        console.log('BOY')
    }

} else if(A === 1){
    if(B >= 19){
        console.log('WOMAN')
    } else {
        console.log('GIRL')
    }
}

