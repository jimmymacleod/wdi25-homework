// Geometry Function Lab
// Part 1, Rectangle

const rect = {
  length: 10,
  width: 5,
  getArea: function(){
    return this.length * this.width;
  },
  isSquare: function(){
    if(this.length > this.width){
      return 'This shape is not a square';
    } else {
      return 'This shape is a rectangle'
    }
  },
  getPerimeter: function(){
    return (2 * this.length) + (2 * this.width);
  }
}
console.log(rect.getArea());
console.log(rect.isSquare());
console.log(rect.getPerimeter());


// Part 2, Triangle

const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4,

isEquilateral: function(){
  if(this.sideA === this.sideB && this.sideB === this.sideC){
    return 'This Triangle is Equilateral';
  }
  else{
    return 'This Triangle is not Equilateral';
  }
},
  isIsosceles: function(){
    if(this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC){
      return 'This Triangle is Isosceles';
    } else {
      return 'This Triange is not Isosceles';
    }
  },
  getArea: function(){
    return (this.sideA + this.sideB + this.sideC) / 2
   }
  // isObtuse: function(){
  //
  // }
}
console.log(triangle.isEquilateral());
console.log(triangle.isIsosceles());
console.log(triangle.getArea());

// The Cash Register

const cartObject = {
  item1: 1.25,
  item2: .99,
  item3: 25.01,
  item4: 0.60,
  item5: 10.34,
  item6: 22.36,
  getTotal: function(){
    return this.item1 + this.item2 + this.item3 + this.item4 + this.item5 + this.item6;
  }
}
console.log(cartObject.getTotal());
