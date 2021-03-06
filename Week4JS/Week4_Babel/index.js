import fetch from "node-fetch"

const URL = "https://swapi.dev/api/people/";

async function fetchPerson(url) {
  const response = await fetch(url)
  return await response.json()

}
async function printNames() {
  console.log(`Before`);

    const person1 = await fetchPerson(`${URL}${1}`);
    const person2 = await fetchPerson(`${URL}${2}`);

    console.log(`After`);

 return Promise.any([person1, person2]).then((person)=> console.log(person));
 // return Promise.all([person1, person2]).then((person)=> console.log(person));

}

printNames()