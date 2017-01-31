'use strict'

// -----------------------------------------------------------------------------

// Release 0

let prime_factors = (angka, hasil = []) => {
if (angka==2||angka==3){
  hasil.push(angka);
  return hasil;
}else{
  if (angka%2==0) {
    hasil.push(2);
    angka=angka/2;
    return prime_factors(angka,hasil);
  }else if (angka%3==0) {
    hasil.push(3);
    angka=angka/3;
    return prime_factors(angka,hasil);
  }else{
    for (var i = 2; i <=angka ; i++) {
      if (angka%i==0) {
        hasil.push(i);
        angka=angka/i;
        return prime_factors(angka,hasil);
      }
    }
  }
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
function hitungHasil(array=[]) {
  var total=1;
  for (var i = 0; i < array.length; i++) {
    total=total*array[i];
  }
  return total;
}

let simple_recursive = (number) => {
  var numberString=number.toString();
  var numberString=numberString.split("");
  var numberArray=numberString.map(function(x) {
    return parseInt(x);
  });
 if (numberArray.length==1) {
    return number;
  }else {
    var hasil=hitungHasil(numberArray);
    return simple_recursive(hasil);

  }

}

console.log(simple_recursive(39))  // 4
console.log(simple_recursive(999)) // 2
console.log(simple_recursive(3))   // 3
