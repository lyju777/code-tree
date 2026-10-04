const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let arr = []
let idx = 2

arr[0] = 1
arr[1] = Number(input[0])

while(true){
    arr[idx] = arr[idx - 1] + arr[idx - 2]
    
    if(arr[idx] > 100){
        break;
    }
    idx++
}
console.log(arr.join(' '))



