function Person(name, age){
    this.name = name;
    this.age = age;

    return {
        setAge: function(age) {
          this.age = age
        },
    
        setName: function(name) {
          this.name = name
        },
    
        getInfo: function() {
            console.log(`${name}, ${age}`);
        }
      };
}
const person1 = new Person("Sumit", 21)
