const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n')

let a = input.map(Number)


for(let i = 0; i < a.length; i++){
    if(a[i] !== 0){
        console.log(a[i])
    }
}