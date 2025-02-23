// problem9(스코프)의 1번 퀘스트
let temperature = 25;
temperature = 30;
console.log(temperature);

const MAX_TEMPERATURE = 35;
MAX_TEMPERATURE = 25; // const는 초기화 후 재할당이 불가능한데, 할당된 변수를 바꾸려고 하면서 오류가 발생한다. 상수는 변경되서는 안된다.
console.log(MAX_TEMPERATURE);

// problem9(스코프)의 2번 퀘스트
if (true) {
  let isRaining = true;
  console.log("if문 스코프: ", isRaining);
}
console.log("전역 스코프: ", isRaining);
// isRaining이 전역스코프에 존재하지 않아 not defined 에러가 발생한다. 해결하기 위해서 isRaining을 상위 스코프에서 선언하고, 하위 스코프에서 재할당해서 사용하는 방법이 있다.
let isRaining;

if (true) {
  isRaining = true;
  console.log("if문 스코프: ", isRaining);
}
console.log("전역 스코프: ", isRaining);
