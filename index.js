
// Math
// 1

const custom = (a, b) =>  Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

// 2

const custom = (infelicity) => Math.random().toFixed(infelicity)

//Arr
// 1

const custom = (arr) => arr.reverse()

// 2

const custom = (arr) => arr.reduce((acc, curr) => curr % 2 == 0 ? acc += curr : acc, 0)

// 3

const custom = (arr) => arr.map(e => e.trim())

// For
// 1

const custom = (num) => {
    for(let i = 1; i < 10; i++) {
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

// 2

const custom = arr => {
    let temp = []
   for(item of arr) {
     temp.indexOf(item) == -1 ? temp.push(item) : null
   }
   return temp
}

// 3

const custom = arr => {
    let temp = arr[0]
   for(item of arr) {
      item.length > temp.length ? temp = item : null
   }
   return temp
}

// 4

const custom = arr => {
    
   for(let i = 0; i < arr.length; i++) {
      arr[i] = Math.pow(arr[i], 2)
   }
   return arr
}

// 5

const custom = arr => {
    
   for(let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].toLowerCase()
   }
   return arr
}

// 6


const custom = arr => {
    let summ = 0
    for (let i = 0; i < arr.length; i++) {
        summ += arr[i] 
    }
    return Math.floor(summ / arr.length)
 }