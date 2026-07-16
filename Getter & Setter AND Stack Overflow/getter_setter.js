////---------------------- JavaScript Getters and Setters  ----------------------//
//// Getters : 
//// A getter is a special method that lets you read a property.
//// It runs automatically when you access the property.
//// You access it like a normal property (without parentheses).
//// Syntax:
//// get propertyName() {
////     // return something
//// }
////
//// Setters: 
//// A setter is a special method that lets you update a property.
//// It runs automatically when you assign a value.
//// It can validate or modify the value before storing it.
//// Syntax:
//// set propertyName(value) {
////     // store or validate value
//// }
//// Setters are commonly used for validation.
// class User{
//     set password(value){
//         if(value.length < 6){
//             console.log("Password too short");
//             return;
//         }
//         this._password = value;
//     }
// }
//// Example:
class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    //// Getter for email
    get email(){
        return this._email.toUpperCase();
    }
    //// Setter for email
    set email(value){
        this._email = value;
    }
    //// Getter for password
    get password(){
        return `${this._password}hitesh`;
    }
    //// Setter for password
    set password(value){
        this._password = value;
    }
}
const hitesh = new User("h@hitesh.ai", "abc");
console.log(hitesh.email);
//// Output:
//// H@HITESH.AI
console.log(hitesh.password);
//// Output:
//// abchitesh
////--------------------------- How constructor works here --------------------------------------//
//// const hitesh = new User("h@hitesh.ai", "abc");
//// constructor(email, password){
////     this.email = email;
////     this.password = password;
//// }
//// Notice:
//// We are NOT directly creating
//// this._email
//// this._password
//// Instead, JavaScript sees:
//// this.email = email
//// Since a setter named "email" exists,
//// JavaScript automatically calls:
//// set email(value){
////     this._email = value;
//// }
//// So:
//// this._email = "h@hitesh.ai"
//// Likewise:
//// this.password = password
//// automatically calls:
//// set password(value){
////     this._password = value;
//// }
//// So:
//// this._password = "abc"
////------------------------- What happens when reading email? ----------------------------------//
//// console.log(hitesh.email)
//// JavaScript sees:
//// hitesh.email
//// Since a getter exists,
//// it automatically calls:
//// get email(){
////     return this._email.toUpperCase();
//// }
//// this._email = "h@hitesh.ai"
//// Returned value:
//// "H@HITESH.AI"
////----------------------- What happens when reading password? ---------------------------------//
//// console.log(hitesh.password)
//// JavaScript automatically calls:
//// get password(){
////     return `${this._password}hitesh`;
//// }
//// this._password = "abc"
//// Returned value:
//// "abchitesh"
////----------------------- Why use _email and _password? ---------------------------------------//
//// Imagine writing:
//// set email(value){
////     this.email = value;
//// }
//// this.email = value -> setter runs -> this.email = value -> setter runs again -> Infinite recursion
//// Maximum call stack size exceeded
//// Wrong Example:
class WrongUser{
    set email(value){
        this.email = value;   // Calls setter forever
    }
}
//// Correct Example:
class CorrectUser{
    set email(value){
        this._email = value;  // Stores value in a different property
    }
}
////---------------------------- Why underscore (_) ? -------------------------------------------//
//// The underscore (_) is just a naming convention.
//// It tells developers:
//// This is an internal/private-like property.
//// JavaScript does NOT make it private.
//// _email
//// _password
//// are still accessible if needed:
 console.log(hitesh._email);
 console.log(hitesh._password);

