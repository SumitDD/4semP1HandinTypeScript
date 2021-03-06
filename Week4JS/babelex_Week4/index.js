const fetch = require("node-fetch")

function messageDelay(msg, delay){

    return new Promise((resolve, reject) => {

        setTimeout(()=>{
            if(msg.length === 0){
                reject(`No message!`)
            }
            const upperCases = msg.toUpperCase()
            resolve(upperCases)

        }, delay)

    })   

}

const promises = [
    messageDelay(`Hej`, 1300),
    messageDelay(`Javascript`, 700),
    messageDelay(`Hello world`, 1000)

]

Promise.any(promises).then((upperCase)=> console.log(upperCase))