const fetch = require("node-fetch")
var now = require("performance-now")
const URL = "https://swapi.dev/api/people/";

start = now()
end = now()

async function fetchPerson(url) {
  const response = await fetch(url)
  return await response.json()

}
async function printNames() {
  console.log(`Before`);
  console.log(start.toFixed(3))

  //Sequential
    const person1 = await fetchPerson(`${URL}${1}`);
    const person2 = await fetchPerson(`${URL}${2}`);
    //Sequential

  //Parallel
 return Promise.all([fetchPerson(`${URL}${1}`).then(person1 => person1.name), fetchPerson(`${URL}${2}`)]);
  //Parallel

   console.log(person1.name);
   console.log(person2.name)
  console.log((start-end).toFixed(3))
  console.log(`After`);
}

printNames()