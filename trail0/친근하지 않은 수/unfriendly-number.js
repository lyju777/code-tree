const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = input
let arr = []

for(let i = 1; i <= n; i++){
    if(i % 2 === 0 || i % 3 === 0 || i % 5 === 0){
     arr.push(i)
    }
}
console.log(n - arr.length)
