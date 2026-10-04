const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let res = ''
let arr = []

for(let i = 0; i < input.length; i++){
    if(Number(input[i]) === 0){
        break;
    }
    arr.push(Number(input[i]))
}

for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 !== 0){
        arr[i] += 3
        res += arr[i] + ' '
    } else {
        arr[i] /= 2
         res += arr[i] + ' '
    }
}
console.log(res)
