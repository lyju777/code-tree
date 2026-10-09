const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number)

let max = input[0]

for(let i = 0; i < input.length; i++){
    if(max < input[i]){
        max = input[i]
    }
}

console.log(max)