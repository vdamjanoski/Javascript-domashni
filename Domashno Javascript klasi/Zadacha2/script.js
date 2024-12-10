class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  const area = rectangle.calculateArea();
  const perimeter = rectangle.calculatePerimeter();
  
  console.log(`Rectangle Area = ${area}`);
  console.log(`Rectangle Perimeter = ${perimeter}`);
  const rectangle = new Rectangle(12, 10);