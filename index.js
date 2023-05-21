

//1

const animal = {
    name: "Dog",
    type: "Chordata",
    age: 18,
    characteristics: {
        color: "blue",
        sex: "male"
    },
    toString() {
        return `N: ${this.name}, A: ${this.age}, type: ${this.type} color: A${this.characteristics.color}, sex: ${this.characteristics.sex}`
    },
    changeAge(age) {
        this.age = age
        return true
    }
}

//2
const car1 = {
    brand: "BMW",
    year: 1998,
    characteristics: {
        color: "blue",
        sex: "male"
    },
    delete(type) {
        delete car1[type]
        return true
    }
}

const car2 = {
    brand: "BMW",
    year: 1998,
    characteristics: {
        color: "blue",
        sex: "male"
    },
}

//3

const user = {
    name: "John",
    mail: "asfasf@yahoo.com",
    pass: "124352",
    checkPassword(val) {
        return this.pass == val
    } 

}

//4

const shop = {
    name: "Party",
    address: "Koeningsplaz. 43p",
    item: [
        {name: "asf", price: 22},
        {name: "asa", price: 18},
        {name: "asa", price: 14},
        {name: "asa", price: 12},
        {name: "asa", price: 199},
        {name: "asa", price: 1},
        {name: "asa", price: 32},
    ],
    sortArray() {
        return this.item.sort((x, y) => {
            if(x.price < y.price)
                return 1
            else if(x.price > y.price)
                return -1
            else
                return 0
        })
    }
}

//5

const post = {
    address: ["Koeningsplaz. 43p", "Koeningsplaz. 42","Koeningsplaz. 41p"],
    time: ["13:00", "15:20", "18:00"],
    opened(time) {
        return this.time.filter(e => e >= time)
    }
}



