function checkAB(num) {
    var huruf = ['a','b'];
    for(var i = 1; i<num.length; i++){
        if(num[i]===huruf[0]&&num[i+4]===huruf[1]){
            return true;
        }
        if(num[i]===huruf[1]&&num[i+4]==huruf[0]){
            return true
        }
    } return false;
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false