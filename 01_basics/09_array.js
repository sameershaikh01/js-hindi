//  const fruits = ["Banana", "Orange", "Apple", "Mango"];
//  const points = [40, 100, 1, 5, 25, 10];
// // fruits.push(points)
// // console.log(fruits);

// // we concatnet many array without concatnet

// const myArr = [...fruits, ...points]
// console.log(myArr);

// const num = [1,2,3,4,5]
// num.forEach(consoleItem)

// function consoleItem(item, index, arr){
//    //console.log( item);
//    //console.log( index);
//    console.log( arr);
   
// }

// map mehod creatte new array and perform operation

// const num2 =num.map((v,index) =>{
//    return v*3 + index
// })
// console.log(num2)

// array filter
// const num2 = num.filter((v) => {
//    return v>2
// })
// console.log(num2)


// reduce array
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
   return total + value;
 }
 console.log(numbers)
 console.log(sum)



 
