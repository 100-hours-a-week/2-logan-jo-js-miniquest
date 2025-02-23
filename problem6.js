// problem6(js의 비동기 처리)의 1번 퀘스트
const myFirstPromise = new Promise((resolve, reject) => {
  resolve("Hello, Promise!");
});

myFirstPromise.then((message) => {
  console.log(message);
});

// problem6(js의 비동기 처리)의 2번 퀘스트
const waitForMessage = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, Async/Await!");
    }, 1000);
  });
};

waitForMessage().then((message) => console.log(message));
