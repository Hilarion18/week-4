function totalDigitRekursif(angka) {
    var arrAngkaStr = (String(angka).split(''));
    var jumlah = 0;
  
    if (arrAngkaStr.length > 1){
      jumlah = jumlah + Number(arrAngkaStr[0])
      arrAngkaStr.shift();
  
      var angkaStr = arrAngkaStr.join('');
      var angkaBaru = Number(angkaStr);
      
      return jumlah + totalDigitRekursif(angkaBaru)
    
    } else {
      return jumlah = jumlah + angka
    }   
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5