function kaliTerusRekursif(angka) {
    if ( angka > 9 ) { 
        var angkaStr = String(angka);
        var result = 1;
        for (var i = 0; i < angkaStr.length; i++){
          result = result * Number(angkaStr[i]);
        }
        return kaliTerusRekursif(result);
    } else {
        return angka;
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6