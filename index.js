
// reqursion

// 1
const factorial = fac => fac == 1 ? 1 : fac * factorial(fac-1)

//2
const palindrom = text => {
    if(text.length % 2 == 0)
        return false

    if(text.length == 1) 
        return true

    if(text[0] == text[text.length - 1]) 
        return palindrom(text.substring(1, text.length - 1))
    else return false
}

//massiv

//1
const changeMassivWhereValueLowerThanPiv = mass => {
    const piv = mass.reduce((acc, number) => acc + number, 0) / mass.length;
    return mass.map(e => e < piv ? e += 1 : e)
}
//2
const longestWorld = input => {
    return input
    .split(/\W+/)
    .reduce(
      function (longest, word) {
        return word.length > longest.length
          ? word
          : longest;
      }, 
      ''
    );
}
//4
const changeMassiv = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++)
        if (arr[j] === arr[i]) {
            arr[i] = "повторился"
        }
    }
    return arr
}
