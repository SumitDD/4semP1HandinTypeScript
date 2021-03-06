var numbers = [2, 3, 67, 33];

function reduceNumbers(array) {
  let sum = 0;
  array.forEach((number) => {
    sum += number;
  });
  return sum;
}

console.log(reduceNumbers(numbers));
