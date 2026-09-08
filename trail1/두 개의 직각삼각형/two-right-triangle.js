const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

let N = Number(input[0]);

for (let i = 0; i < N; i++) {
    let line = '';
    
    // 1. 왼쪽 별 (N - i개)
    for (let j = 0; j < N - i; j++) {
        line += '*';
    }
    
    // 2. 가운데 공백 (2 * i개)
    for (let j = 0; j < 2 * i; j++) {
        line += ' ';
    }
    
    // 3. 오른쪽 별 (N - i개)
    for (let j = 0; j < N - i; j++) {
        line += '*';
    }
    
    console.log(line);
}