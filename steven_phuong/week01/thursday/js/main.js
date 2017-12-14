// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangle = {
//   length: 4,
//   width: 4
// };
//

// Rectangle
var rectangle = {
  length: 4,
  width: 4
};

rectangle.isSquare = function() {
  if (rectangle.length == rectangle.width) {
      return "rectangle is a square!";
  } else {
      return "Not a square.";
  }
}

rectangle.area = function() {
  return rectangle.length * rectangle.width;
}

rectangle.perimeter = function() {
  return (rectangle.length + rectangle.width + rectangle.width + rectangle.width);
}

console.log(rectangle.isSquare());
console.log(rectangle.area());
console.log(rectangle.perimeter());
