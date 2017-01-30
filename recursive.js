'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // write your code here
  var primeX = 2;
  var primeY = 1;

  while(primeX < angka) {
    if(angka % primeX === 0) {
      hasil.push(primeX);
      angka = angka / primeX;
    } else {
      primeX = primeX + primeY;
      primeY = 2;
    }
  }
  hasil.push(primeX);
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
  var count = 1;
  var num   = String(number);

  if(num.length === 1) {
    return number
  }
  if(num.length > 1) {
    for(var i = 0; i < num.length; i++) {
      count *= num[i]
    }
  }
  return simple_recursive(count)
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3
