const fetch = require('node-fetch');

const obj = {
name : "",
firstFilm : "",
firstSpecies : "",
homeworldForSpecie : ""
}


async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id){

    await fetch('https://swapi.dev/api/people/'+ id)
    .then((res)=> {
        return res.json()
    }) 
    .then((data) =>{
        obj.name = data.name 
           
        return fetch(data.films[1])
    })
    .then((res)=> {
        return res.json()
    }) 
    .then((data)=>{
        obj.firstFilm = data.title
        
        return fetch(data.species[3])
    })
    .then((res)=> {
        return res.json()
    }) 
    .then((data)=>{
        obj.firstSpecies = data.name  
              
        return fetch(data.homeworld)
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        obj.homeworldForSpecie = data.name
        console.log(obj)
    })

}

getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1)