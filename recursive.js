'use strict'

// -----------------------------------------------------------------------------

// release 0
let prime_factors = (angka, hasil = []) => {
  for (var i = 2; i <= angka; i++) {
    while (angka %i === 0) {
      hasil.push(i);
      angka = angka / i
    }
  }

  return hasil;
}

console.log(prime_factors(3))  // [3]
console.log(prime_factors(6))  // [2,3]
console.log(prime_factors(8))  // [2,2,2]
console.log(prime_factors(25)) // [5,5]
console.log(prime_factors(123123123)) // [3, 3, 41, 333667]
console.log(prime_factors(105))

// -----------------------------------------------------------------------------

// Release 1

let simple_recursive = (number) => {
var number= number.toString();
var result = 1;

  for(var i=0; i<number.length; i++){

    while(number.length == 1){
      return number
    }
    result *= number[i]
  }
  return simple_recursive(result)
}


console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3
