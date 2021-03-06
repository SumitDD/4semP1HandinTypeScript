const { EventEmitter } = require("events");

class DOS_Detector extends EventEmitter{
    constructor(timeValue){
      super();  //Figure out what it is you have to extend (use moshes video)
      this.urls = new Map();
      this.TIME_BETWEEN_CALLS = timeValue;
    }
    addUrl = (url) =>{
      const time = new Date().getTime();
      if(this.urls.has(url)){
        const deltaTime = time - this.urls.get(url) 
        if(deltaTime < this.TIME_BETWEEN_CALLS){
          console.log("TODO: Fire the 'DosDetected' event")
            console.log(this.emit({url: url, timeBetweenCalls: deltaTime}))
            
          //Add this info to the event {url:url,timeBetweenCalls:deltaTime}
        }
        
      }
      this.urls.set(url,time);
    }
 }

 module.exports = DOS_Detector;
 // Export the class using nodes CommonJS module system (require/exports)
 