const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let A = Number(input[0])
let B = Number(input[1])
let C = Number(input[2])

if(A >= B && A >= C){
    if(B >= C){
        console.log(B)
    } else {
        console.log(C)
    }
}

if(B >= A && B >= C){
    if(A >= C){
        console.log(A)
    } else {
        console.log(C)
    }
}

if(C >= A && C >= B){
    if(A >= B){
        console.log(A)
    } else {
        console.log(B)
    }
}
