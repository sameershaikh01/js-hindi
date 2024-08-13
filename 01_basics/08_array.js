// An array is a special variable, which can hold more than one value:

// const cars = ["Saab", "Volvo", "BMW"]; // Also create  let myArr = new Array(1,2,3)

// console.log(cars[0]);

// const arr = [1,2, 3 ,4]

// arr.push(5)
// arr.push(6)
// console.log(arr);

// arr.pop()
// console.log(arr);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join("_"))                            

//The splice() method adds new items to an array.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // console.log(fruits.splice(2, 1, "Lemon", "Kiwi"))
// console.log(fruits.splice(0, 3))
// console.log(fruits)

/*

The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

*/


//The slice() method slices out a piece of an array.
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus)

