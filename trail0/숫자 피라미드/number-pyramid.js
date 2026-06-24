const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)
let res = ''

for(let i = 1; i <= n; i++){
  res = ''
  for(let y = 0; y < i; y++){
    res += `${i} `
  }
  console.log(res)
}