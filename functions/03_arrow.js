const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        console.log(this)
      return this.firstName + " " + this.lastName;
      
    }
  };

//   console.log(person.fullName())
//  person.firstName = "sam"
 // console.log(person.fullName())
//   console.log(person.fullName)


function myfunction(fName, lName , Age , Year){
    this.firstName = fName
    this.lastName = lName
    this.age = Age
    this.year = Year
    
}
    
//  const num =new myfunction("john", "wick", 22, 2001)
//  console.log(num);

//  const num1 =new myfunction("mohd", "sameer", 22, 2001)
//  console.log(num1);


 // creating arrow function

 const chai = () => {
    console.log(this)
 }

 //chai()

 const add = (num1 , num2) => num1 + num2
add(1,2) 
console.log(add(1,2));

 