// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."


const squareNumber = function (num) {

  const squaredNumber = num**2;
  console.log(`The result of squaring the number ${num} is ${squaredNumber}`);
  return squaredNumber;

};

squareNumber(5);
squareNumber(39);


// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (num) {

  const halvedNum = num / 2;
  console.log(`Half of ${num} is ${halvedNum}`);
  return halvedNum;

};

halfNumber(48);
halfNumber(109);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const percentOf = function (num1, num2) {

  percent = num1 / num2 * 100;
  percentRounded = percent.toFixed(2);
  console.log(`${num1} is ${percentRounded}% of ${num2}`);
  return percent;

};

percentOf(10, 50);
percentOf(23, 82);

const areaOfCircle = function(radius) {

  area = Math.PI * radius**2;
  areaRounded = area.toFixed(2);
  console.log(`The area of a circle with a radius of ${radius}cm is ${areaRounded}cm squared.`);
  return area;

};

areaOfCircle(53);

// Part 2

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const allTogether = function (num) {
  const halfNum = halfNumber(num);
  const squareNum = squareNumber(halfNum);
  const areaNum = areaOfCircle(squareNum);
  const percentNum = percentOf(areaNum, squareNum);

  console.log(percentNum.toFixed(2));
};

allTogether(6);
