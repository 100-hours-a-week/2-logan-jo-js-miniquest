// problem5(블로킹 논블로킹, 동기 비동기)의 1번 퀘스트의 모듈
console.log("Start");
console.log("Processing");
console.log("End");

// problem5(블로킹 논블로킹, 동기 비동기)의 2번 퀘스트의 모듈
console.log("Start");
setTimeout(() => {
  console.log("Async Operation Complete");
}, 1000);
console.log("End");
