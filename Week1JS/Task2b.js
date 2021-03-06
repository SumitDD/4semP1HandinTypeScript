function myMap(array, callback) {
  return callback(array);
}

function myMap(array) {
  const newArray = [];

  array.forEach((age) => {
    newArray.push(age + 10);
  });
  return newArray;
}
const ageArray = [1, 2, 3, 4];

console.log(myMap(ageArray, myMap));

function newMap(array) {
  const newArray = array.map((age) => age + 10);
  return newArray;
}

console.log(myMap(ageArray, newMap));
