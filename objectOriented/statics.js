class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName : ${this.username}`);
        
    }

   static createId(){
        return 123
    }
}

const sameer = new user("sameer")
console.log(sameer.createId());
