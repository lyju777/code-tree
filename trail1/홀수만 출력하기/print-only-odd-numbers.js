const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(/\s+/);

// input[0]은 개수 N이므로, 실제 정수들은 인덱스 1부터 시작합니다.
let N = Number(input[0]);

for (let i = 1; i <= N; i++) {
    let num = Number(input[i]);
    
    // 홀수이면서 3의 배수인 경우 출력
    if (num % 2 !== 0 && num % 3 === 0) {
        console.log(num);
    }
}