// const promiseOne = new Promise((res, rej) => {
//     // Do asyn
//     //Db calls 


//     setTimeout(function() {
//         console.log("print");
//         res(); // to connect then to use resovle then the then function is connected
//     },1000)
// })

// // Now consume the promise

// promiseOne.then(
//     function(){
//         console.log("promised consumed");
        
//     }
// )


// Anotherway to write


// new Promise((resolve, reject) => {
//     setTimeout(function() {
//         console.log("Asyn is call");
//         resolve();
//     }, 2000);
// }).then(
//     function(){
//         console.log("promised is done")
//     }
// )



// Creating third promise

// const promiseThree = new Promise((resolve , reject) => {
//     setTimeout(function () {
//        resolve({username: "sameer", email:"sameer@Autt.com"}) 
//     } , 1000)
// })


// promiseThree.then(function(user){
//            console.log(user);
           
// })


// four promise 

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
     let error = true;

     if (!error) {
        resolve({username:"sameer" , password: "1234"})
     }else{
        reject("ERROR: something is error")
     }

    }, 1000)
})


// promiseFour.then((user)=>{
//      console.log(user);
//      return user.username;
// })

promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username) =>{
     console.log(username);
     
})
.catch((error) =>{
     console.log(error);
     
}).finally(() => {
    console.log("The promise either resolve or reject");
    
})



// 5th promise 

const promiseFive = new Promise((resolve , reject) => {
        setTimeout(() => {
            let error= true;
            if (!error) {
                resolve({username:"sameer" , password: "124"})
            } else {
                reject("ERROR: something went wrong")
            }
        },1000 );
})



async function promisefive(){
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

promisefive()


// async function userApi() {
//     try {
//         const response = await fetch("https://randomuser.me/api")
//        // console.log(response);
        
//     let data =await response.json();
//     console.log(data);

//     } catch (error) {
//         console.log(error);
        
//     }
    
// }

// userApi();


fetch("https://randomuser.me/api")
.then(function(resolve) {
    return resolve.json();
})
.then((data) => {
    console.log(data);
    
})
.catch(function(error){
    console.log(error);
    
})
