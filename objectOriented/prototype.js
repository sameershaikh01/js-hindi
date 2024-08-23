// let str = "sameer            ";

// // console.log(str.trim().length);

// console.log(str.truelength);

const myArr = ["thor", "spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman:"sling",

    getSpidermanPower : function(){
        console.log(`spidy power is ${this.thor.spiderman}` );
        
    }
}

Object.prototype.sameer = function(){
    console.log("sameer is available in all object");
    
}

// heroPower.sameer();

// myArr.sameer()

Array.prototype.heySameer = function(){
    console.log("hey sameer");
    
}

myArr.heySameer();

// heroPower.heySameer()


// inheritance


const student = {
    studentName : "sameer"
}


const studentSub = {
       studentSub: 9,
       studentId : "01"
}

const studentResult = {
    studentResult: "pass",
    studentCourse : "B.tech",
    // __proto__ : studentSub

}

// student.__proto__ = studentResult;



// console.log(student.studentId);

// console.log(studentSub);


// modern syntax 

// Object.setPrototypeOf(student, studentResult);

// console.log(student.studentResult);



let anotherUserName = "mohd sameer";

String.prototype.truelength = function(){
//    console.log(this);
//    console.log(this.name);
    console.log(`this length is : ${this.trim().length}`);  
    
}

anotherUserName.truelength()

"mohd sameer".truelength()
"tea".truelength()


// this refer to the window object 
// but node refer to {}


