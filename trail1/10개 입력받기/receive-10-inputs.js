const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split(/\s+/);

let sum = 0;
let count = 0;

for (let i = 0; i < input.length; i++) {
    const val = Number(input[i]);
    if (val === 0) break;
    
    sum += val;
    count++;
}

const avg = (sum / count).toFixed(1);

console.log(`${sum} ${avg}`);