'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  var valuePrime = 2
  var valueFix = 1
  while (valuePrime < angka) {
      if(angka % valuePrime === 0){
        hasil.push(valuePrime)
        angka = angka/valuePrime
      } else {
        valuePrime += valueFix
        valueFix = 2
      }
  }
    hasil.push(valuePrime)
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
  var number = number.toString()
  var value = number.length

  if(value > 1) {
    var result = 1
    for(let i = 0; i < value; i++) {
      result = result * number[i]
    }
  }
  
  if(value === 1) {
    return Number(number)
  }

  return simple_recursive(result)
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3
