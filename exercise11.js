function changeMe(arr) {
    var num = 0;
    for(var i = 0; i < arr.length; i++) {
        console.log(++num + ". " + arr[i][0] + " " + arr[i][1]);
        var obj = {
            firstName: arr[i][0],
            lastName:  arr[i][1],
            gender: arr[i][2],
            age: 2018 - arr[i][3]
        };
        if (arr[i][3] == undefined) {
            obj.age = "Invalid Birth Day";
        }
        console.log(obj);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""