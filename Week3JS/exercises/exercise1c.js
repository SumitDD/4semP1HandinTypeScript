const ex1b = require('./exercise1b')

// makeSecureRandom.makeSecureRandomList([10, 20, 30, 40, 50, 60]).then(data => data.forEach((random)=>{
//      console.log(random)
//  }))


async function getResult() {
     const result = await ex1b.makeSecureRandomList([8, 16, 24, 32, 40, 48])
     console.log(result)
}

getResult()

