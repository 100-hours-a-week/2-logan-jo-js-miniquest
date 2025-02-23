// problem2(프로그래밍 패러다임)의 1번 퀘스트
const arr = [1, 2, 3, 4, 5];

const sum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const re1 = sum(arr);
console.log(re1);

// problem2(프로그래밍 패러다임)의 2번 퀘스트
const multi = (arr) => {
  return arr.map((value) => value * 2);
};
const newArray = multi(arr);
console.log(newArray);
