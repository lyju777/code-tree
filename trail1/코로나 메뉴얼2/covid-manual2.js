const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let arr = Array(4).fill(0)
let cnt = 0

for(let i = 0; i < 6; i+=2){
    if(input[i] === 'Y' && Number(input[i+1] >= 37)){
        arr[0]++
        cnt++
    } else if(input[i] === 'N' && Number(input[i+1] >= 37)){
        arr[1]++
    }  else if(input[i] === 'Y' && Number(input[i+1] < 37)){
        arr[2]++
    } else {
        arr[3]++
    }
}

if(cnt >= 2){
    arr[4] = 'E'
}

console.log(arr.join(' '))
