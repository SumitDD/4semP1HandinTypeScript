const crypto = require('crypto');

const randomObj = {
    title: "6 Secure Randoms",
    randoms: []
  }
  
function randomByte(size, callback){

    require('crypto').randomBytes(size, function(err, buffer) {
        let secureHex = buffer.toString('hex')
        const obj = {length: size, random: secureHex}
        callback(obj)
       
        
})
}

randomByte(2, obj => {  
    randomObj.randoms.push(obj) 
    randomByte(4, obj => {    
        randomObj.randoms.push(obj)    
        randomByte(8, obj =>{    
            randomObj.randoms.push(obj)       
            randomByte(16, obj =>{   
                randomObj.randoms.push(obj)            
                console.log(randomObj)
            })
        })
 
    })
   
})
