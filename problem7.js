// problem6(자바스크립트 엔진)의 1번 퀘스트

/*

먼저, 브라우저가 HTML 문서를 읽으면서 <script> 태그의 해당하는 자바스크립트 코드를 다운받아, 자바스크립트 엔진을 통해 파싱을 진행합니다. 구글의 경우 대표적으로 v8엔진을 사용합니다.
파싱을 통해 코드를 토큰으로 분리하고, 구문분석 문법에 의해 추상구문 트리(AST)와 바이트코드를 생성합니다. 이후 v8부터의 최신 엔진은 JIT기반으로 인터프리터를 진행하면서 hot spot을 탐색해 
특정 함수는 기계어로 컴파일해 실행 속도를 높입니다.

 */

// problem6(자바스크립트 엔진)의 2번 퀘스트
// 1. let 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageLet); // 호이호스팅은 되지만, 초기화전에 접근해 RFE initialization 오류가 발생한다.
let messageLet = "Hello with let!";

// 2. const 키워드를 사용한 변수의 호이스팅 확인하기
console.log(messageConst); // TDZ존에 있어, RFE initialization 오류가 발생한다.
const messageConst = "Hello with const!";

// 3. 화살표 함수의 호이스팅 확인하기
console.log(greet()); // TDZ존에 있어, RFE initialization 오류가 발생한다.
const greet = () => "Hello, Arrow Function!";
