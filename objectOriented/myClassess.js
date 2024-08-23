// ES6

class user{
    constructor(username , email, password){
        this.username = username
        this.Email = email
        this.password = password
    }

    encryptPasswod(){
        return `${this.password}abc`
    }
}

const New = new user("sameer", "sameer@12gmail" , "123454");
console.log(New);

console.log(New.encryptPasswod());
