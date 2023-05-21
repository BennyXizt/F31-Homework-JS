
//1

class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
  discount = (percent) => {
    return `вы должны заплатить ${this.price - this.price * (percent / 100)} euro`
  }
}

p1 = new Product("Sugar", 30)
console.log(p1.discount(80));

//2

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    square = () => this.width * this.height
    perimeter = () => 2 * (this.width + this.height)
}
r1 = new Rectangle(2, 3)
console.log(r1.square());
console.log(r1.perimeter());

//3

class Client {
    constructor(name, mail) {
        this.name = name
        this.mail = mail
    }
    validateMail() {
        const reg = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$/
        return reg.test(this.mail)
    }
}
c1 = new Client("name", "asfasf@mail.ru")
console.log(c1.validateMail());
c1.mail = "safasfasf.asf.ru"
console.log(c1.validateMail());

//4

class Transport {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
    showInfo() {
        return `B: ${this.brand}, T: ${this.model}`
    }
}

class Car extends Transport {
    constructor(brand, model, year) {
        super(brand, model)
        this.year = year
    }
    showInfo() {
        return `B: ${this.brand}, T: ${this.model} Year: ${this.year}`
    }
}
class Motorcycle extends Transport {
    constructor(brand, model, capacity) {
        super(brand, model)
        this.capacity = capacity
    }
    showInfo() {
        return `B: ${this.brand}, T: ${this.model} Capacity: ${this.capacity}`
    }
}

cc1 = new Car("BMW", "M3", 2005)
console.log(cc1.showInfo());

m1 = new Motorcycle("BMW", "M3", 90)
console.log(m1.showInfo());

//5

class Shape {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    square = () => {}
    perimeter = () => {}
    showInfo = () => { return `W: ${this.width}, H: ${this.height}, Square: ${this.square()}, Perimeter: ${this.perimeter()}`}
}

class RRectangle extends Shape {
    constructor(width, height) {
        super(width, height)
    }
    square = () => this.width * this.height
    perimeter = () => 2 * (this.width + this.height)
}
class Circle extends Shape {
    constructor(width, height, radius) {
        super(width, height)
        this.radius = radius
    }
    square = () => this.width * this.height
    perimeter = () => 2 * (this.width + this.height)
}