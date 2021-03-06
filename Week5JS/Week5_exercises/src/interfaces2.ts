interface IMyFunc {
    (a: string,
        b: string,
        c: string): string[]
}


let myFunc: IMyFunc = function (a, b, c) {
    return Array(a, b, c)
}

let myFuncToUpperCase: IMyFunc = function (a, b, c) {
    return Array(a.toUpperCase(), b.toUpperCase(), c.toUpperCase())
}

let f2 = function logger(f1: IMyFunc) {
    //Simulate that we get data from somewhere and uses the provided function
    let [a, b, c] = ["a", "b", "c"];
    console.log(f1(a, b, c));
}

function notMyFunc(a: string, b: string, c: string) {
}


