class Person {
    constructor(name, age){
        this._name = name
        this._age = age
    }

    print = function(){
        console.log(`${this._name}, ${this._age}`)
    }

    showAsync = function(){
        setTimeout(() =>{
            console.log(this.name, this.age)
        }, 500)
    }

    get name(){
        return this._name
    }
    get age(){
        return this._age
    }
    set age(age){
        this._age = age
    }

}

const person1 = new Person("Sumit", "21");
person1.showAsync()