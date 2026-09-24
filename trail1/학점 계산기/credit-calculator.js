
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const scores = input[1].split(' ').map(Number);

// 학점 총합 계산
const sum = scores.reduce((acc, curr) => acc + curr, 0);

// 평균 계산
const avg = sum / n;

// 평균학점 소수 첫째 자리까지 출력
console.log(avg.toFixed(1));

// 등급 판정 및 출력
if (avg >= 4.0) {
    console.log("Perfect");
} else if (avg >= 3.0) {
    console.log("Good");
} else {
    console.log("Poor");
}