function angkaPrima(angka) {
    var i = 0;
    var simpan = 0;
    while (i <= angka) {
        i = i + 1;
        if (angka % i === 0) {
            simpan = simpan + 1;
        }
    }
    if(simpan === 2 && simpan !== angka )  {
        return true;
    } else {
        return false;
    }
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false

