const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(' ')

let arr = []

arr = input
arr.reverse()

let res = ''

for(let i=0; i < arr.length; i++){
    res += arr[i]
}
console.log(res)