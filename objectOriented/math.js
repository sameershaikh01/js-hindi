// for interview questions

const descriptor = Object.getOwnPropertyDescriptors(Math, "PI");
console.log(descriptor.PI);

// to change any properties of own object is possible for some casess but not all

const student = {
    name : "sameer",
    id : "01",
    subject : 1
}

// to add properties using Object

// console.log(Object.getOwnPropertyDescriptor(student,"name"))
// Object.defineProperty(student , "name" , {
//     writable : false,
//     enumerable:false
// })

// console.log(Object.getOwnPropertyDescriptor(student,"name"))



// console.log(Math.PI);

Object.defineProperty(Math, "value" , {
    writable:true
})

console.log(descriptor.PI);

