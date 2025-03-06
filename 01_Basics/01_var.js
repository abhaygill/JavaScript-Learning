const accountId = 12212755
let accEmail = "abhaygill@google.com"
var accPassword = "12345"
accCity = "Jalandhar"

//accountId = 12212765

// 1) You cannot assign value to a const variable.
// 2) Use "let" not "var", bcoz var does not handle scope, meaning it 
// changes the value of variable even in or out of the scope.
// 3) You can change value of "let" variable.
// 4) If you wont assign any value to a variable, then it will display "undefined".
console.log(accountId);
console.table([accountId, accEmail, accPassword, accCity])
accEmail="uvgill77@ggl.com"
accPassword = "54321"
accCity = "Toronto"
let accState
console.table([accountId, accEmail, accPassword, accCity, accState])
