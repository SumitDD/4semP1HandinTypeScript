const crypto = require('crypto');
const { promises } = require('fs');

var randomObj = {
    title: "6 Secure Randoms",
    randoms: []
  }
  
  function makeSecureRandomList(array) {
    return Promise.all([
      new Promise((resolve, reject) => {
        array.forEach((number) => {
          crypto.randomBytes(number, function (err, buffer) {
            let secureHex = buffer.toString("hex");
            let obj = { length: number, random: secureHex };
            randomObj.randoms.push(obj);
          });
        });
        setTimeout(() => {
          resolve(randomObj.randoms);
        }, 1000);
      }),
    ]);
  }
// makeSecureRandom(0).then(data =>{
//     randomObj.randoms.push(data)
//     console.log(randomObj)
// })

//Promise.all([makeSecureRandom(5), makeSecureRandom(10)]).then(data => console.log(data))

module.exports.makeSecureRandomList = makeSecureRandomList