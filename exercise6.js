function hitungHuruf(kata) {
  var arrHitung=[];
  var newKata = kata.split(' ');
  for(var x=0; x<newKata.length;x++){
    var newKata2 = newKata[x].split('').sort();
    for(var i=0; i<newKata2.length; i++){
      if(newKata2[i] === newKata2[i+1]){
        arrHitung.push(newKata[x]);
      }
    } 
  }
  return arrHitung[0];
}
  
  // TEST CASES
  console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
  console.log(hitungHuruf('I am a passionate developer')); // passionate
  console.log(hitungHuruf('aku adalah anak gembala')); // adalah
  console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
  console.log(hitungHuruf('mengayuh perahu di danau')); // danau