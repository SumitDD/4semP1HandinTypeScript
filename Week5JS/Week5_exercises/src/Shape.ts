abstract class Shape {
    private _color: string;
    constructor(color: string) {
        this._color = color;
    }
    abstract get area(): number;
    abstract get perimeter(): number;

    getColor(): string {
        return this._color
    }
    setColor(_color: string): void {
        this._color = _color
    }

    toString() {
        return `Color: ${this._color}`
    }
}

class Circle extends Shape {

    private _radius: number
    constructor(_color: string, _radius: number) {
        super(_color)
        this._radius = _radius
    }
    get area(): number {
        return Math.PI * this._radius ^ 2
    }
    get perimeter(): number {
        return Math.PI * this._radius * 2
    }
    get Color(): string {
        return super.getColor()
    }
    set Color(_color: string) {
        super.setColor(_color)
    }

    get radius() {
        return this._radius
    }


}

class Cylinder extends Circle {
    private _height: number
    constructor(_height: number, color: string, radius: number) {
        super(color, radius)
        this._height = _height
    }
    get height(): number {
        return this._height
    }
    set height(_height: number) {
        this._height = _height
    }
    get Color(): string {
        return super.Color
    }
    set Color(_color: string) {
        super.Color = _color
    }
    get Volume() {
        return this._height * Math.PI * (super.radius ^ 2)
    }
}

let c = new Cylinder(10, "blue", 5)

console.log(c.Volume)
