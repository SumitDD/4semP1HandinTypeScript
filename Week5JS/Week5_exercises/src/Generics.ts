function reverseArr<T>(arg: T[]): T[] {
    return arg.reverse();
}

console.log(reverseArr<string>(["a", "b", "c"]));
console.log(reverseArr<number>([1, 2, 3]));
console.log(reverseArr<boolean>([true, true, false]));
//console.log(reverseArr<number>(["a", "b", "c"]));

class DataHolder<T>{
    value: T;
    constructor(value: T) {
        this.value = value
    }
    setValue(value: T) {
        this.value = value
    }
    get getValue() {
        return this.value
    }

}

let test = new DataHolder<number>(12)
console.log(test.getValue)
test.setValue(35)
console.log(test.getValue)
