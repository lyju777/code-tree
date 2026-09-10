const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

// 위쪽 부분 (중앙 행 포함, n개 행)
for (let i = 0; i < n; i++) {
    let line = ' '.repeat(n - 1 - i) + '*'.repeat(2 * i + 1);
    console.log(line);
}

// 아래쪽 부분 (n - 1개 행)
for (let i = 0; i < n - 1; i++) {
    let line = ' '.repeat(i + 1) + '*'.repeat(2 * (n - 1 - i) - 1);
    console.log(line);
}