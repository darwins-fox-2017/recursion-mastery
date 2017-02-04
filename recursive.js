'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // write your code here
  while (angka%2==0) {
    hasil.push(2);
    angka /= 2;
  }

  var square = Math.sqrt(angka);
  for (var i = 3; i <= square; i++) {
    while (angka%i==0) {
      hasil.push(i);
      angka/=i;
    }
  }

  if (angka > 2) {
    hasil.push(angka);
  }

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

    let hitung = 0;
    let string = String(number);
    let angka = string.split('');

    if (number >= 100) {
        hitung = angka[0] * angka[1] * angka[2];
    } else if (number >= 10) {
        hitung = angka[0] * angka[1];
    } else {
        return number;
    }
    return simple_recursive(hitung);
}

console.log(simple_recursive(39)); // 4
console.log(simple_recursive(999)); // 2
console.log(simple_recursive(3)); // 3
