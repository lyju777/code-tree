const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let a1 = input[0] // 감기증상 유무
let a2 = Number(input[1]) // 체온

let b1 = input[2] // 감기증상 유무
let b2 = Number(input[3]) // 체온

let c1 = input[4] // 감기증상 유무
let c2 = Number(input[5]) // 체온

let cnt = 0

if(a1 === 'Y'){
    if(a2 >= 37){
        cnt++
    }
}

if(b1 === 'Y'){
    if(b2 >= 37){
        cnt++
    }
}

if(c1 === 'Y'){
    if(c2 >= 37){
        cnt++
    }
}

if(cnt >= 2){
    console.log(`E`)
} else {
    console.log(`N`)
}