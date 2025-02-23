// problem10(클로저)의 1번 퀘스트
const createCounter = () => {
  let count = 0;

  const increment = () => {
    count++;
  };
  const decrement = () => {
    count--;
  };
  const getCount = () => {
    return count;
  };

  return { increment, decrement, getCount };
};

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount());

counter.decrement();
console.log(counter.getCount());

// problem10(클로저)의 2번 퀘스트
function messageMaker(start) {
  return function makeMessage(addMessage) {
    return start + addMessage;
  };
}

const message = messageMaker("My name is ");
console.log(message("logan"));
