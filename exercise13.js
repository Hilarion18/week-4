function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

                   var daftarBarang = [ 
                    ['Sepatu Stacattu', 1500000, 10],
                    ['Baju Zoro', 500000, 2],
                    ['Sweater Uniklooh', 175000, 1]
                 ];
              
if (shoppers.length === 0){
return shoppers;
}

var names1 = [];
var names2 = [];
var names3 = [];
var profit1 = 0;
var profit2 = 0;
var profit3 = 0;

for (var i in shoppers) {
if (shoppers[i].product === daftarBarang[0][0]){
  if (daftarBarang[0][2] >= shoppers[i].amount){
    names1.push(shoppers[i].name)
    daftarBarang[0].splice(2, 1, (daftarBarang[0][2]- shoppers[i].amount))
    profit1 += daftarBarang[0][1] * shoppers[i].amount
  }
} else if (shoppers[i].product === daftarBarang[1][0]){
  if (daftarBarang[1][2] >= shoppers[i].amount){
    names2.push(shoppers[i].name)
    daftarBarang[1].splice(2, 1, (daftarBarang[1][2]- shoppers[i].amount))
    profit2 += daftarBarang[1][1] * shoppers[i].amount
  }
} else if (shoppers[i].product === daftarBarang[2][0]){
  if (daftarBarang[2][2] >= shoppers[i].amount){
    names3.push(shoppers[i].name)
    daftarBarang[2].splice(2, 1, (daftarBarang[2][2]- shoppers[i].amount))
    profit3 += daftarBarang[2][1] * shoppers[i].amount
  }
} 
}
               
var list = [{product: daftarBarang[0][0], shoppers: names1, leftOver: daftarBarang[0][2], totalProfit: profit1}, {product: daftarBarang[1][0], shoppers: names2, leftOver: daftarBarang[1][2], totalProfit: profit2}, {product: daftarBarang[2][0], shoppers: names3, leftOver: daftarBarang[2][2], totalProfit: profit3}]

return list
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]