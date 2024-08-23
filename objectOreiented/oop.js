function user(username , isLoggIn, password ){
    this.username = username,
    this.isLoggIn = isLoggIn, 
    this.password = password,
    this.greeting = function(){
        console.log("this is the function");
        
    }
}

const userOne = new user("sameer", true, 12314);
const userTwo = new user("sam", false , 1234)

// console.log(user.greeting);
console.log(userOne);

