const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number)

let min = input[1]
let cnt = 0

for(let i = 1; i <= input.length-1; i++){
    if(min > input[i]){
        min = input[i]
    }
}

for (let i = 1; i <= input.length-1; i++) {
    if (min === input[i]) {
        cnt++;
    }
}

console.log(`${min} ${cnt}`)