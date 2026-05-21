// 반복문 - 조건이 유지되는 한
// 조건 -> 1번 만족시키면 끗 x

let n = 0;
// if (n < 10) {
while (n < 10) {
  // n < 10 -> false가 될 때까지...
  n += 2;
  console.log(n);
}

// 끝 조건이 명확하지 않을 때
while (true) {
  // 내부에서 멈출 때까지 지속
  if (Math.random() > 0.5) {
    console.log("동전 던지기 성공!");
    break; // 종료조건
  } else {
    console.log("동전 던지기 실패!");
  }
}

// continue
let w = 0;
while (w < 10) {
  w++; // 홀수 일 때는 출력해주기
  //   if (w % 2 == 1) {
  //     // 2로 숫자를 나누었을 때 나머지가 1이면 홀수다
  //     // 짝수는 2의 배수 -> 2의 배수는 2로 나누면 나머지가 0
  //     console.log(w, "홀수입니다");
  //   }
  if (w % 2 == 0) {
    // 짝수일 때
    continue; // 더 이상 로직을 진행시키지 않고 다음 while 순번으로 넘김
  }
  console.log(w, "홀수입니다");
}
