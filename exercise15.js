function changeVocals (str) {
  // a -> b, i -> j, u -> v, e -> f, o -> p
  // A -> B, I -> J, U -> V, E -> F, O -> P
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(str[i] == 'a') {
      result = result + 'b';
    } else if(str[i] == 'i') {
      result = result + 'j';
    } else if(str[i] == 'u') {
      result = result + 'v';
    } else if(str[i] == 'e') {
      result = result + 'f';
    } else if(str[i] == 'o') {
      result = result + 'p';
    } else if(str[i] == 'A') {
      result = result + 'B';
    } else if(str[i] == 'I') {
      result = result + 'J';
    } else if(str[i] == 'U') {
      result = result + 'V';
    } else if(str[i] == 'E') {
      result = result + 'F';
    } else if(str[i] == 'O') {
      result = result + 'P';
    } 
     else {
      result = result + str[i];
    }
  } 
  return result;
}

function reverseWord (str) {
  var result = '';
  for(var i = str.length-1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

function setLowerUpperCase (str) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(abjad.indexOf(str[i]) == -1) {
      result = result + str[i].toLowerCase();
    } else {
      result = result + str[i].toUpperCase()
    }
  }
  return result;
}

function removeSpaces (str) {
  var result = '';
  for(i = 0; i < str.length; i++) {
    if(str[i] == ' ') {
      result = result + '';
    } else {
      result = result + str[i];
    }
  }
  return result;
}

function passwordGenerator(name) { 
  var vokal = changeVocals(name);
  var balik = reverseWord(vokal);
  var ukuran = setLowerUpperCase(balik);
  var spasi = removeSpaces (ukuran);

  if(name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  } else {
    return spasi;
  }  
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'


/* var result = '';
  for(var i = 0; i < str.length; i++) {
    if(str[i] == 'a') {
      result = result + 'b';
    } else if(str[i] == 'i') {
      result = result + 'j';
    } else if(str[i] == 'u') {
      result = result + 'v';
    } else if(str[i] == 'e') {
      result = result + 'f';
    } else if(str[i] == 'o') {
      result = result + 'p';
    } else if(str[i] == 'A') {
      result = result + 'B';
    } else if(str[i] == 'I') {
      result = result + 'J';
    } else if(str[i] == 'U') {
      result = result + 'V';
    } else if(str[i] == 'E') {
      result = result + 'F';
    } else if(str[i] == 'O') {
      result = result + 'P';
    } 
     else {
      result = result + str[i];
    }
  } 
  return result;
}

function reverseWord (str) {
  var result = '';
  for(var i = str.length-1; i >= 0; i--) {
    result = result + str[i];
  }
  return result;
}

function setLowerUpperCase (str) {
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(abjad.indexOf(str[i]) == -1) {
      result = result + str[i].toLowerCase();
    } else {
      result = result + str[i].toUpperCase()
    }
  }
  return result;
}

function removeSpaces (str) {
  var result = '';
  for(i = 0; i < str.length; i++) {
    if(str[i] == ' ') {
      result = result + '';
    } else {
      result = result + str[i];
    }
  }
  return result;
}

function passwordGenerator(name) { 
  var vokal = changeVocals(name);
  var balik = reverseWord(vokal);
  var ukuran = setLowerUpperCase(balik);
  var spasi = removeSpaces (ukuran);

  if(name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  } else {
    return spasi;
  }  
} */