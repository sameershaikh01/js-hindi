//const userEmail = "s@sameer.com"

// if(userEmail){
//     console.log("Got the email");
    
// }else {
//     console.log("Don't got the email");
    
// }

// const userEmail = ""

// if(userEmail){
//     console.log("Got the email");
    
// }else {
//     console.log("Don't got the email");
    
// }

const userEmail =  {}  // [], {} true val  but "" return false

if(userEmail){
    console.log("Got the email");
        
    }else {
        console.log("Don't got the email");
        
 }


 // falsy values

// false , 0, -0 , BigInt 0n , "" , null , undefined , NaN

// truthy valuse

// "0", true , "false" , " " , [] , {} , function(){} 

// false == 0  // true
// false == "" //true
// 0 == "" // true


// nullish coalescing operator (??)

let val;
val = 5 ?? 10

console.log(val)

let val1;
val1 = null ?? 10

console.log(val1)



let val2;
val2 = null ?? 10

console.log(val2)


// Ternary operator

// Syntax
//(condition) ? value1:value2 
// variablename = (condition) ? value1:value2 

const num = 40;
num > 41 ? console.log("treu") : console.log("No")
