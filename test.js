//Code to test classes and how they work



class Rectangle {
    constructor(height, width, x, y) {
      this.height = height;
      this.width = width;
      this.x = x;
      this.y = y;
    }
    // Getter
    get area() {
      return this.calcArea();
    }

    get pos(){
        return this.coords();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    }
    coords() {
        return (this.x,this.y)
    }
  }
  

  square = new Rectangle(10, 30, 80, 60);


console.log(square.area ,square.pos); // 100
