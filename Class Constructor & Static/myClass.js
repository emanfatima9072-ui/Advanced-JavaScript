////------------------------------JavaScript Classes (ES6) vs Constructor Functions--------------------------------//
////ES6 Class : ES6 introduced the 'class' keyword in JavaScript.
// //Classes provide a cleaner and more readable syntax for creating objects.
// //Internally, JavaScript still uses Prototype-based inheritance.
// //A class is simply a different way to write constructor functions.
//// Syntax:
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
////constructor() : constructor() is a special method.It runs automatically whenever a new object is created
// //using the 'new' keyword.
////Example:
// //const chai = new User("chai", "chai@gmail.com", "123")
// //JavaScript internally does:
// //const chai = {}
// //chai.__proto__ = User.prototype
// //User.call(chai, "chai", "chai@gmail.com", "123")
// //Result:
// //chai = {
    ////username: "chai",
   //// email: "chai@gmail.com",
   //// password: "123"
////}
//------------------Class Methods-------------------------------//
// //Methods written inside a class are NOT copied into every object.
// //They are automatically stored inside the prototype.
// //Example:
// //encryptPassword(){
    ////return `${this.password}abc`
////}
// //Actually becomes:
// //User.prototype.encryptPassword = function(){
    // //return `${this.password}abc`
////}
// //Therefore every object shares the same function,which saves memory.
//------------------Creating Objects------------------------------//
const chai = new User("chai", "chai@gmail.com", "123")
// //Output:
console.log(chai.encryptPassword())
// //123abc
console.log(chai.changeUsername())
// //CHAI
// //--------------- What happens behind the scenes?-------------------//
// //JavaScript converts the class into something similar to:
function User2(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}
User2.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User2("tea", "tea@gmail.com", "123")
console.log(tea.encryptPassword()) // 123abc
console.log(tea.changeUsername())  // TEA
////-----------------------Why use prototypes?------------------------------//
// //Imagine creating 10,000 users.
// //Without Prototype:
////user1.encryptPassword = function(){...}
////user2.encryptPassword = function(){...}
////user3.encryptPassword = function(){...}
// //Every object stores its own copy.This wastes memory.
////With Prototype:
////User.prototype.encryptPassword = function(){...}
// //All objects share ONE function.
////user1 ----\
////user2 ----- > User.prototype.encryptPassword()
////user3 ----/
////-------------------------------Prototype Chain-------------------------------//
// //tea object -> tea -> User.prototype -> Object.prototype -> null
// //When we call:
// //tea.encryptPassword()
// //JavaScript searches:
// //Does tea have encryptPassword  : No
// //Look inside User.prototype : Found 
// //Execute function
////-----------------------ES6 Class vs Constructor Function----------------------//
// // ES6 Class
// //class User{
//  //   constructor(){}
//    // method(){}
// //}
// // Constructor Function
// //function User(){}
// //User.prototype.method = function(){}
// // Both create exactly the same prototype chain.
//----------------------------Memory Representation-----------------------------//
// // Class Version
// //// Class Version: User -> constructor(), prototype (encryptPassword(), changeUsername()); new User() creates chai object { username, email, password } linked to User.prototype
// //{
//  //   username: "chai",
//  //   email: "chai@gmail.com",
//   //  password: "123"
// //}
////---------------------Flow of new User()------------------------//
////new User(...)
//// Empty object created
////Object linked to User.prototype
////constructor() executes
////Properties assigned
////Object returned

