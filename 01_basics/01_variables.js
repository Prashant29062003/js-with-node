const accountId = 14430;
let accountEmail = "prashant123@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";

// accountId = 3; ----- const can't reassign same again it -- Not allowed 

console.log(accountId);

accountEmail = "pro123@gmail.com";
accountPassword = "1234";
accountCity = "Bengluru";
let accountState;
/*---------------------------------------------------------------------------

Prefer not use "var"
because of issue in block scope and functional scope

-----------------------------------------------------------------------------
*/

console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);