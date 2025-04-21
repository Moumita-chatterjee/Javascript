const accountId = 123
let accountEmail = "moumita@google.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

//accountId = 2 // NOT ALLOWED
accountEmail = "m@gmail.com"
accountPassword = "24"
accountCity = "Kolkata"

console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/  
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])