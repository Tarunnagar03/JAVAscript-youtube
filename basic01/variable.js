const accountId = 2004
let accountEmail = "nagar07@gmail.com"
var accountPassword ="2001"
accountCity = "meerut"
let accountState;

 // accountId = 5 // not allowed


 accountEmail ="tn@google.com"
 accountPassword ="2006"
 accountCity = "KITHORE"

console.log(accountId);

/* 
prefer not to use var ,
 beacuse of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])