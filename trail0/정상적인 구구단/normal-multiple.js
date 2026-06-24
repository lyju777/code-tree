const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)

for(let i = 1; i <= n; i++){
    let res = ''
    for(let y = 1; y <= n; y++){
            
      if(y === n){
          res += `${i} * ${y} = ${i*y} `
      } else {
         res += `${i} * ${y} = ${i*y}, `
      }
    }
    console.log(res)
}