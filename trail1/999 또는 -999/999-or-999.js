const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

// 첫 번째 데이터로 min, max 초기화
let min = input[0];
let max = input[0];

for (let i = 0; i < input.length; i++) {
    // 999나 -999가 나오면 종료
    if (input[i] === 999 || input[i] === -999) {
        break;
    }

    // 최솟값 갱신
    if (min > input[i]) {
        min = input[i];
    }

    // 최댓값 갱신 (독립된 if문 사용!)
    if (max < input[i]) {
        max = input[i];
    }
}

console.log(`${max} ${min}`);