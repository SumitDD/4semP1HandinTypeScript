let members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 },
];

const averageAge = members.reduce(
  (accumluator, currentValue, array) =>
    accumluator + currentValue.age / array.length,
  0
);

console.log(averageAge);
