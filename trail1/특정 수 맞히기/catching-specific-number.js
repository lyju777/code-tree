const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(/\s+/)

let idx = 0

while(true){
    let A = Number(input[idx])
    if(A < 25){
        console.log(`Higher`)
    } 
    
    if(A > 25){
        console.log(`Lower`)
    } 
    
    if(A === 25){
        console.log(`Good`)
        break;
    }
    idx++

}