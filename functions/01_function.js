function myFunction(){
    console.log("sameer")
}

// myFunction()
// myFunction()

function Function(number1, number2) {
   return number1 + number2
}
console.log(Function(1,2))

function cartFunction(...num){
    return num
}

console.log(cartFunction(10,23,45,13));

function cartFunction2(val1, val2, ...num){
    return num
}
console.log(cartFunction2(10, 20, 30,49)); // 10 store in val1 and 20 sstore in val2  rest is store in array

const obj = {
    name:"sameer",
    subject :"comp"
}

function myObj(anyObj){
     console.log(`name is ${anyObj.name} and subject is ${anyObj.subject}`)
}

myObj(obj)

