const accountId = 144553
let accountEmail = "deepak@google.com"
var accountPassword = "12345"
let accountState; // will show undifined 

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope and also value can change if we var multiples times 
*/


console.table([accountId, accountEmail, accountPassword,  accountState])