const accountId = 122313
let accountEmail = "sameer@it.com"
var accountPassword = "12345"
accountCity = "Azamgarh"


// accountId = 2 Not allowed because of const
accountEmail = "sameer121autt@"
accountPassword = "123"
accountCity = "Bareilly"

// other method to console all method using table
console.table([accountId,accountEmail, accountPassword, accountCity])


console.log(accountId);

/*
prefer to not use var
because of block scope and functionall scope
*/