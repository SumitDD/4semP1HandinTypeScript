//Task 2.A
//Original callback
function sortByAge(array) {
  const newArray = [];

  array.forEach((age) => {
    if (age > 10) {
      newArray.push(age);
    }
  });

  return newArray;
}

function myFilter(array, myCallback) {
  return myCallback(array);
}

const ageArray = [10, 25, 43, 8];

function newFilter(array) {
  let newArray = array.filter((age) => age > 10);

  return newArray;
}

console.log(myFilter(ageArray, newFilter));
