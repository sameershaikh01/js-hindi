// if
if(true){

}

// if(2 == "2"){
//    console.log("true");
    
// }

// conditons < , > , = , <=  ,  >= , ==  ,  !=  ,   ===  also check dtype

// if(2 !== "2"){
//     console.log("true");
     
//  }


//  const temperature = 42

//  if(temperature === 51){
//     console.log("temp is greater than 50")
//  }else {
//     console.log("no")
//  }

// const b = 5

// if(b > 3) console.log("true"),console.log("false")

//const time = 30

// if (time < 10) {
//     greeting = "Good morning";
//     console.log(greeting)
//   } else if (time < 20) {
//     greeting = "Good day";
//     console.log(greeting)
//   } else {
//     greeting = "Good evening";
//     console.log(greeting)
//   }

  // Use the switch statement to select one of many code blocks to be executed.
  // syntax

//   switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

 let day = 3

switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      console.log(day)
      break;
    default:
        console.log("Please provide the val")  
  }

//  default code is not run  when break is not define except default all code is run


let x = 1;

switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
    console.log(text)
}