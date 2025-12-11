// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiply(num, num2, num3, num4) {
  return (result = num * num2 * num3 * num4);
}

const resultMultiply = multiply(4, 6, 8, 9);
console.log(resultMultiply);

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function evenOrOddOperation(number) {
  if (number % 2 === 1) {
    return number * 2;
  } else {
    return number / 2;
  }
}

const resultEvenOrOddOperation = evenOrOddOperation(9);
console.log(resultEvenOrOddOperation);

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbs) {
  console.log(numbs);
  const size = numbs.length;
  let avg = 0
  for(const num of numbs){
    avg += num;
  }
  return avg/size
}
const numbers = [3, 4, 5, 78, 9, 67, 5];
const resultAvg = make_avg(numbers);
console.log(resultAvg);
