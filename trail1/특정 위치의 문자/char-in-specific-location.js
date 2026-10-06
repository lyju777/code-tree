const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let arr = ['L','E','B','R','O','S']
let N = input[0]
let idx = -1

for(let i = 0; i < arr.length; i++){
    if(arr[i] === N){
        idx = i
    }
}

if(idx === -1){
    console.log('None')
} else {
    console.log(idx)
}