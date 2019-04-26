// The Calculator
// Part 1

// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function(num){
  const squaredNum = num * num;
  console.log(`The result of squaring the number ${num} is ${squaredNum}`);
  return squaredNum;
}

squareNumber(5);
squareNumber(20);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function(num2){
  const halvedNum2 = num2 / 2;
  console.log(`Half of ${num2} is ${halvedNum2}`);
  return halvedNum2;
}
halfNumber(10);
halfNumber(30);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function(numA, numB){
  const result = (numA / numB) * 100;
  console.log(`${numA} is ${result}% of ${numB}`);
  return result;
}
percentOf(50, 100);
percentOf(6, 20);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.
const areaOfCircle = function(radius){
  const area = radius * radius * Math.PI;
  console.log(`The area for a circle with a radius of ${radius} is ${area.toFixed(2)}`);
  return area;
}
areaOfCircle(6);
areaOfCircle(10);

// Part 2
// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
const totalNumber = function(numNum){
  const halfNum = numNum / 2; //10 / 2 = 5
  const squaredNum = halfNum * halfNum; //5 * 5 = 25
  const areaNum = squaredNum * squaredNum * Math.PI; //25 * 25 * 3.14 = 1,962.5
  const percentageNum = (areaNum / squaredNum) * 100; // (1,962.5 / 25) = 78.5, 78.5 * 100 = 7,850
  console.log(`Result of numNum is ${percentageNum.toFixed(2)}`);
}
totalNumber(10);

const totalNumberFunction = function(numNum){
  const halfNum = halfNumber(numNum); //10 / 2 = 5
  const squaredNum = squareNumber(halfNum); //5 * 5 = 25
  const areaNum = areaOfCircle(squaredNum); //25 * 25 * 3.14 = 1,962.5
  const percentageNum = percentOf(areaNum, squaredNum); // (1,962.5 / 25) = 78.5, 78.5 * 100 = 7,850
  console.log(`Result of numNum is ${percentageNum.toFixed(2)}`);
}
totalNumberFunction(10);
