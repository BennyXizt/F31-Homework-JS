
// 1

const number = prompt("Enter number: ", null)

number % 2 == 0 ? console.log("even") : console.log("odd")

// 2

if(number < 10)
console.log("Number is less than 10");
else if(number > 5)
console.log("Number is bigger than 5");
else if(number == 7)
console.log("Number is equal 7");

// 3

switch(month) {
    case 0: {
        console.log("January");
        break
    }
    case 1: {
        console.log("February");
        break
    }
    case 2: {
        console.log("March");
        break
    }
    case 3: {
        console.log("April");
        break
    }
    case 4: {
        console.log("May");
        break
    }
    case 5: {
        console.log("June");
        break
    }
    case 6: {
        console.log("July");
        break
    }
    case 7: {
        console.log("August");
        break
    }
    case 8: {
        console.log("September");
        break
    }
    case 9: {
        console.log("October");
        break
    }
    case 10: {
        console.log("Nowember");
        break
    }
    case 11: {
        console.log("December");
        break
    }
}

// 4

const pow = (number, power) => Math.pow(number, power)

// 5

const custom = (number, row) => Array(row).fill(number).join(", ")

// 6

const custom = (min, max) => Math.random() * (max - min) + min

// 7

const arr = [1, 3, 2, 5, 6, 5]
console.log(Math.max(...arr));

// 8

const custom = () => {
    const pass = prompt("Enter pass: ", null)
    const rPass = prompt("Repeat your pass: ", null)
    return pass == rPass

}

// 9

const custom = (a, b) => Math.abs(a) + Math.abs(b)

// 10

const custom = (1, 10) => Math.random() * (10 - 1) + 1

// 11

const custom = a => {
    let answer = 1
    for(let i = 1; i <= Math.floor(a); i++) {
        answer *= i
    }
    return answer
}

// 12


const custom = n => {
    let arr = []
    for(let i = 1; i <= n; i++) {
        Number.isInteger(n / i) ? arr.push(i) : null
    }
    return `Number ${n} has ${arr.length} Divisors: ${arr} and its ${arr.length > 2 ? "Not a" : "A"} prime number. Sqrt equals ${Math.sqrt(n)}`
}
