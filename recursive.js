'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
  // write your code here
  let b = 1
  let p = 2

  while(p<angka){
    if(angka%p === 0){
      hasil.push(p)
      angka = angka/p
    }else{
      p = p + b
      b = 2
    }
  }
  hasil.push(angka)
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
  var arr = String(number).split("")

  if(arr.length == 1){
    return number
  }
  else{
    var hasil = 1
    for(let i=0; i<arr.length; i++){
      hasil *= arr[i]
    }
    return simple_recursive(hasil)
  }
}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3
