// this refer to the window object 
// but node refer to {}

function setUserName(username){
    this.username = username
}


function createUser(username, email, password){

    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const prin = new createUser("same" ,"same123@gamil" , "1234")
console.log(prin);
