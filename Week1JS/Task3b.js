const names = ["Lars", "Peter", "Jan", "Bo"];

Array.prototype.myFilter = function (callback) {
  return callback;
};

function makeLowerCase(array) {
  let newArray = [];
  array.forEach((name) => {
    newArray.push(name + " dey");
  });
  return newArray;
}

console.log(names.myFilter(makeLowerCase(names)));
