function makanTerusRekursif(waktu) {
    var jumlah = 0;
  if (waktu > 0) {
    jumlah = jumlah + 1
    return jumlah + makanTerusRekursif(waktu - 15)
  } else {
    return jumlah
  }
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0


/* function makanTerusRekursif(waktu) {
  var jumlah = 0;
  jumlah = jumlah + (waktu / 15);
  hasil = Math.ceil(jumlah);
  return hasil;
} */