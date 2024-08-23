class user{
    constructor(username){
        this.username = username
    }

    log(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class student extends user{
    constructor(username, email , password){
        super(username);
        this.email = email
        this.password = password
    }
}

const chai = new student("sameer", "sameer@gmail", "password");
console.log(chai);
