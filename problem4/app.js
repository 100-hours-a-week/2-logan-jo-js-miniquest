// problem4(모듈 시스템)의 1번 퀘스트
import { add } from "./math.js";

console.log(add(2, 3));

// problem4(모듈 시스템)의 2번 퀘스트
import { Add, subtract } from "./operations.js";
import User from "./userProfile.js";

const user = new User("logan", 22);
console.log(user.name, user.age);
console.log(Add(user.age, 10), subtract(user.age, 10));
