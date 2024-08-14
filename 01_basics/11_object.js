const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2};
// console.log(obj3);


// Object assign to add object
//const obj3 = Object.assign({},obj1,obj2)


// add two or more obj
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// to print values of the object
// const fruits = {Bananas:300, Oranges:200, Apples:500};
// console.log(Object.values(fruits)) // same for keys

const courseName = {
    coursename:"computer",
    courseCode:21,
    courseInstructir:"sam"
}

// de structure off object

const {coursename:name} = courseName
// console.log(coursename);
console.log(name)

// JSON format
// const JSON = {
//     "name":"sameer",
//     "coursename":"B,Tech",
//     "subjetc" :"computer"
// }


