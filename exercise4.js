function cariModus(arr) {
  var data = [];
  for(var i = 0; i < arr.length; i++) {
    for(var j = 1; j < arr.length; j++) {
      if (arr[i] === arr[i+j]) {
         data.push(arr[i]);
        }
      }
    }
    if(data.length > arr.length) {
      return -1;
    }
    else if(data.length > 0) {
      return data[0];
    } else {
      return -1;
    }
}
  

  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1