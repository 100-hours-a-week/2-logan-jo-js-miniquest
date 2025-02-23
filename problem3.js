// problem3(함수형 패러다임)의 1번 퀘스트
const add = (a, b) => {
  return a + b;
};

const sum = add(2, 3);
console.log(sum);

// problem3(함수형 패러다임)의 2번 퀘스트
const arr = [1, 2, 3, 4, 5];

const sumArray = (arr) => {
  let res = 0;
  for (let num of arr) {
    res += num;
  }
  return res;
};

const total = sumArray(arr);
console.log(total);
