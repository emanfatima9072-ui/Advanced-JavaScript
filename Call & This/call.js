////------------------------- JAVASCRIPT call() METHOD -------------------------//
//// call() is a built-in JavaScript method.
// //It allows one function to use another function's 'this' object.
// //In simple words:
// //call() lets you borrow a function and decide what 'this' should refer to
// //Syntax:
// //functionName.call(thisArg, arg1, arg2, ...)
// //thisArg = The object that 'this' will point to.
// //Remaining arguments = Passed normally to the function.
////--------------------------Why Do We Need call()?------------------------------//
// //Sometimes one constructor or function needs to reuse another function.
// //If we simply call the function,
// //it creates its own 'this' object instead of using the current one.
//// call() solves this problem by explicitly setting 'this'
// // Example without call()
function SetUsername(username){
    this.username = username;
}
function createUser(username, email, password){
    SetUsername(username); // Normal function call
    this.email = email;
    this.password = password;
}
const user = new createUser("chai", "chai@fb.com", "123");
console.log(user);
//// Output:
// //createUser {
//  // email: 'chai@fb.com',
//  // password: '123'
// // }
// //username is missing.Reason:
//// When SetUsername() executes,
// //it gets its own execution context.
// //'this' inside SetUsername()
// //does NOT refer to createUser object.
// //After the function finishes,
// //its execution context is destroyed.
////--------------------------------------------------------------------------//
//// 3. Using call()
function SetUsername(username){
    this.username = username;
}
function createUser(username, email, password){
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}
const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
// //Output:
// //createUser {
//  //username: 'chai',
//  // email: 'chai@fb.com',
//  // password: '123'
// // }
// //Now username exists because
// //call() forced SetUsername()
//// to use createUser's object as 'this'.
////--------------------------------------------------------------------------//
//// Understanding the Code Line by Line
// function SetUsername(username){
// //// this refers to whichever object is passed using call()
//     this.username = username;
//     console.log("called");
// }
// function createUser(username, email, password){
//     //// Borrow SetUsername function
//     //// Pass current object as this
//     SetUsername.call(this, username);
//     this.email = email;
//     this.password = password;
// }
// const chai = new createUser(
//     "chai",
//     "chai@fb.com",
//     "123"
// );
// console.log(chai);
// //new createUser() creates a new empty object.
// //this = {}
// //call() sends this object to SetUsername.
// //SetUsername.call(this, username)
// //Inside SetUsername
//this.username = username;
// //becomes
////{
   username: "chai"
////}
// //Execution returns back to createUser()
//this.email = email;
//this.password = password;
//// Final object
////{
  //// username: "chai",
  //// email: "chai@fb.com",
  //// password: "123"
////}
////--------------------------------------------------------------------------//
////Why Not Simply Write
//this.username = username;
//// directly inside createUser()?
//// You certainly can.
//// But imagine SetUsername()
// //contains many operations.
// function SetUsername(username){ //Database Call ,  Validation  ,   Logging  , API Request
//     this.username = username;
// }
////Instead of copying all that code,
//// we simply reuse the function using call().
////--------------------------------------------------------------------------//
//// What Does this Mean Here?
//SetUsername.call(this, username);
//// Means
//// Execute SetUsername()
//// Make 'this' inside SetUsername
// //point to the current createUser object.
//// Pass username as argument.
////--------------------------------------------------------------------------//
////Difference Between Normal Call and call()
//// Normal Function Call
//SetUsername(username);
//// 'this' depends on how the function is called.
//// It does NOT use createUser's object.
////--------------------------------------------------//
//// Using call()
//SetUsername.call(this, username);
//// 'this' is explicitly set.
//// It uses createUser's object.
////--------------------------------------------------------------------------//
//// Real-Life Example
function Person(name){
    this.name = name;
}
function Student(name, course){
    Person.call(this, name);
    this.course = course;
}
const s1 = new Student("Ali", "Computer Science");
console.log(s1);
// //Output:
// //Student {
//   //name: 'Ali',
//   //course: 'Computer Science'
// //}
// //Person constructor is reused.
////--------------------------------------------------------------------------//
////call() vs Direct Function Call
// //Direct Call
//greet();
// //this depends on execution context.
////--------------------------------//
//// call()
//greet.call(obj);
// //this always becomes obj.
////--------------------------------------------------------------------------//
////call() vs apply() vs bind()
//// call():Executes immediately , Arguments are passed individually.
//sum.call(obj, 10, 20);
////-------------------------------//
//// bind():
//// Does NOT execute immediately.
//// Returns a new function.
//const newFunction = sum.bind(obj);
//newFunction();
////--------------------------------------------------------------------------//
////Execution Flow: new createUser()-> Empty object created ->  createUser executes -> SetUsername.call(this, username)
////-> this now refers to  -> createUser object -> username added -> email added -> password added -> Final object returned

