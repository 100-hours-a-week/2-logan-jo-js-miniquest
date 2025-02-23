// problem8(Execution Context)의 1번 퀘스트
const message = "Hello, JavaScript!";

const showMessage = () => {
  console.log(message); // 같은 스코프 내의 let으로 재정의 재선언 되지만, 초기화 되지 않아, RFE가 발생한다
  let message = "Hello, ES6!";
  console.log(message); // 초기화가 완료되어 정상적으로 실행된다. 위에 실행을 주석처리 할 경우
};

showMessage();

// problem8(Execution Context)의 2번 퀘스트
const color = "blue";

const firstLevel = () => {
  let color = "red";

  const secondLevel = () => {
    let color = "green";
    console.log(color); // green이 출력된다.
  };

  secondLevel();
  console.log(color); // red가 출력된다.
};

firstLevel();
console.log(color); // blue가 출력된다.
