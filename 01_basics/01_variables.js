const accountId = 144553;
let accountEmail ="riya@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;


//accountId=2 not allowed
accountEmail="ac@gmail.com";
accountPassword="3456";
accountCity="Bengaluru"
console.log(accountId); 
console.log(accountEmail); 
console.log(accountPassword); 
console.log(accountCity);
/* 
Prefer not to use var beacause of issue in functional scope

 */

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

