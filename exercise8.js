function urutkanAbjad(str) {
    var newStr = str.split('');
    var urutkan = newStr.sort();
    var tampil = '';
    for(var i = 0; i < urutkan.length; i++) {
        tampil = tampil + urutkan[i];
    }
    return tampil;
}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'