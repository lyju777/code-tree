const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let a = input

let arr = []

for(let i = 0; i < a.length; i++){
    arr.push(a[i])
}

arr[1] = 'a'
arr[a.length - 2] = 'a'

let res = ''

for(let i = 0; i < arr.length; i++){
    res += arr[i]
}

console.log(res)