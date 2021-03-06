const {filterDirMyPromise, filterDir} = require('./filterdir')

//   filterDir(__dirname, ".js", (err, files)=>{
//      if(err){
//       return console.log(err)
//     }
//      console.log(files)
//      false.readfile(files[3])
//   })



 async function tester(){
    try{
       const files = await filterDirMyPromise(__dirname, '.json').then((data) => console.log(data))
       console.log(files)
    }catch(err){
        console.log(err)
    }
     
   }
tester()