// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangle = {length: 4, width: 4};

const isSquare = function() {
  if (rectangle.length === rectangle.width) {
    return 'The rectangle is a square.';
  } else {
    return 'The rectangle is not a square.';
  }
};

const areaRect = function() {
   return rectangle.length * rectangle.width;
};

const perimeter = function() {
  return 2 * (rectangle.length + rectangle.width);
}

// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangle = {sideA: 3, sideB: 4, sideC: 4};

const isEquilateral = function() {
  if (triangle.sideA === triangle.sideB === triangle.sideC) {
    return 'The triangle is equilateral.';
  } else {
    return 'The triangle is not equilateral.';
  }
};

const isIsosceles = function() {
  if (triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideA === triangle.sideC ) {
    return 'The triangle is isosceles.';
  } else {
    return 'The triangle is not isosceles.';
  }
};

const areaTri = function () {
  return 0.5 * triangle.sideA * triangle.sideB;
}

const isObtuse = function () {
  if (triangle.sideA**2 + triangle.sideB**2 < triangle.sideC**2) {
    return 'The triange is obtuse'
  } else {
    return 'The triange is not obtuse'
  }
};
