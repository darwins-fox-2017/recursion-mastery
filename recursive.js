'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // write your code here
  for(var i = 2;i <= angka;i++) {
    while (angka % i === 0) {
      hasil.push(i)
      angka = angka / i
    }
  }
  return hasil
}

console.log(prime_factors(3))  // [3]
console.log(prime_factors(6))  // [2,3]
console.log(prime_factors(8))  // [2,2,2]
console.log(prime_factors(25)) // [5,5]
console.log(prime_factors(123123123)) // [3, 3, 41, 333667]

// -----------------------------------------------------------------------------

// Release 1

let simple_recursive = (number) => {
  // write your code here
  let result = ''
  
  let numSplit = number.toString().split('')
  if (number >= 100) {
    result = numSplit[0] * numSplit[1] * numSplit[2]
  } else if (number >= 10) {
    result = numSplit[0] * numSplit[1]
  } else {
    return number
  }
  return simple_recursive(result)
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3
