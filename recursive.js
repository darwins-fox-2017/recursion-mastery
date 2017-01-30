'use strict'

// -----------------------------------------------------------------------------


// Release 0
let checkPrime = num => {
  if(num === 1) {
    return false;
  } else if(num === 2) {
    return true;
  }

  for(var i=2;i<num;i++) {
    if(num%i === 0) {
        return false;
    }
  }
  return true;
};

let prime_factors = (angka, hasil = []) => {
  // write your code here
  /**
   * Jika angka secara rekursif dapat terus dibagi dengan bilangan prima / tidak menghasilkan bilangan desimal
   */
  for(var i=2;i<angka;i++) {
    /**
     * jika i dapat hanya bisa dibagi oleh 1 atau bilangan itu sendiri
     */
    if(checkPrime(i) && angka%i === 0) {
        hasil.push(i);
        return prime_factors(angka/i, hasil);
    }
  }

  hasil.push(angka);
  return hasil;
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
  var numStr = number.toString();
  var total = 1;
  if(numStr.length > 1) {
    for(var i=0;i<numStr.length;i++) {
      total *= numStr[i];
    }
    return simple_recursive(total);
  }
  return number;
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3
