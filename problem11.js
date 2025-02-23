// problem11(클래스)의 1번 퀘스트
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
}
const rectangle = new Rectangle(5, 10);
console.log(rectangle.area(), rectangle.perimeter());

// problem11(클래스)의 2번 퀘스트
class Square extends Rectangle {
  constructor(width, height) {
    super(width, height);
  }
  isSquare() {
    return this.width === this.height;
  }
}
const square = new Square(5, 5);
console.log(square.area(), square.isSquare());
