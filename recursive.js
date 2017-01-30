'use strict'

// -----------------------------------------------------------------------------
// Release 0
let prime_factors = (angka, hasil = []) => {
  var arr_prime_number = [];
  while (angka % 2 === 0) {
      arr_prime_number.push(2);
      angka = angka / 2;
  }
    /*
    angka dimulai dibagi dengan bilangan prima paling kecil (2,3,5,7)
    modulus semua angka dengan 2, jika hasil modulus == 0, push angka 2 ke dalam arr_prime_number.
    lalu angka dibagi 2, simpan di variabel angka
    */
  let root_number = Math.sqrt(angka);
  for (var i = 3; i <= root_number; i++) {
      while (angka % i === 0) {
          arr_prime_number.push(i);
          angka = angka / i;
      }
  }
    /*
    jika angka tidak memenuhi kondisi di while pertama, maka ambil bilangan akar dari variabel angka, simpan di var root_number.
    lakukan looping sebanyak bilangan var root_number.
    lakukan modulus, jika angka dibagi 3 == 0, push angka 3 ke dalam arr_prime_number.
    lalu angka dibagi 3, simpan di variabel angka
    */

  if (angka > 2) {
      arr_prime_number.push(angka);
  }
    /*
    jika angka lebih dari 2, simpan angka ke dalam arr_prime_number
    */
  return arr_prime_number;
}

console.log(prime_factors(3))  // [3]
console.log(prime_factors(6))  // [2,3]
console.log(prime_factors(8))  // [2,2,2]
console.log(prime_factors(25)) // [5,5]
console.log(prime_factors(123123123)) // [3, 3, 41, 333667]

// -----------------------------------------------------------------------------
// Release 1
let simple_recursive = (number) => {
  let output_number = 0;
  let number_arr = String(number).split('');
  /*
  buat sebuah variabel untuk menampung nilai hasil operasi
  karena kita butuh setiap digit angka, nilai number diubah ke string dlu agar dapat di split
  karena kita sudah dapat setiap digit angka, kita bisa melakukan perkalian setiap digit angka
  */

  if (number >= 100) {
    output_number = number_arr[0] * number_arr[1] * number_arr[2];
  } else if (number >= 10) {
    output_number = number_arr[0] * number_arr[1];
  } else {
    return number;
  }

  /*
  jika number lebih besar dari 100 (kita anggap number memiliki 3 digit angka),
  lakukan perkalian setiap digit angka, hasil perkalian digunakan menjadi parameter kembali
  return simple_recursive(output_number);

  jika number lebih besar dari 10 (kita anggap number memiliki 2 digit angka),
  lakukan perkalian setiap digit angka, hasil perkalian digunakan menjadi parameter kembali
  return simple_recursive(output_number);

  jika nominal number sudah 1 digit, maka akan langsung me return number sebagai output function
  */

  return simple_recursive(output_number);
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3
