////---------------- JavaScript Getters and Setters using Object.defineProperty() ----------------//
//// Before ES6 classes, JavaScript used constructor functions.
//// To create getters and setters in constructor functions,
//// we use Object.defineProperty().
//// Syntax:
//// Object.defineProperty(object, propertyName, {
////     get: function(){
////         // return value
////     },
////     set: function(value){
////         // store or validate value
////     }
//// });
////--------------------------- Reason to use Object.defineProperty()---------------------------//
//// Object.defineProperty() allows us to:
//// 1. Create getters and setters.
//// 2. Control how a property behaves.
//// 3. Validate data before storing.
//// 4. Format data before returning.
//// 5. Customize property behavior.
//// Example:
function User(email, password){
    //// Internal properties
    this._email = email;
    this._password = password;
    //// Getter and Setter for email
    Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email = value;
        }
    });
    //// Getter and Setter for password
    Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
            this._password = value;
        }
    });
}

const chai = new User("chai@chai.com", "chai");
console.log(chai.email);
////Output:
////CHAI@CHAI.COM
console.log(chai.password);
//// Output:
//// CHAI
////------------------------- How constructor works here --------------------------//
//// const chai = new User("chai@chai.com", "chai");
//// JavaScript creates a new object.
//// Inside the constructor:
//// this._email = "chai@chai.com";
//// this._password = "chai";
//// These are normal object properties.
//// Then JavaScript executes:
//// Object.defineProperty(this, "email", {...})
//// This creates a new property named "email"
//// that has a getter and setter.
//// Likewise:
//// Object.defineProperty(this, "password", {...})
//// creates another property with its own getter and setter.
////---------------------- What happens when reading email? -----------------------//
//// console.log(chai.email);
//// JavaScript looks for a property named "email".
//// It finds a getter:
//// get: function(){
////     return this._email.toUpperCase();
//// }
//// this._email = "chai@chai.com"
//// Returned value:
//// "CHAI@CHAI.COM"
////-------------------- What happens when updating email? ------------------------//
//// chai.email = "abc@gmail.com";
//// JavaScript finds the setter:
//// set: function(value){
////     this._email = value;
//// }
//// value = "abc@gmail.com"
//// Stored internally:
//// this._email = "abc@gmail.com"
////-------------------- What happens when reading password? ----------------------//
//// console.log(chai.password);
//// JavaScript calls:
//// get: function(){
////     return this._password.toUpperCase();
//// }
//// this._password = "chai"
//// Returned value:
//// "CHAI"
////------------------Resaon to store _email instead of email: ---------------------//
//// Object.defineProperty(this, "email", {
////     set: function(value){
////         this.email = value;
////     }
//// })
//// this.email = value -> Setter runs -> this.email = value ->  Setter runs again -> Infinite recursion
////  Maximum call stack size exceeded
////As i described in previous file
//// Wrong Example:
function WrongUser(){
    Object.defineProperty(this, "email", {
        set: function(value){
            this.email = value;     // Calls setter forever
        }
    });
}
//// Correct Example:
function CorrectUser(){
    Object.defineProperty(this, "email", {
        set: function(value){
            this._email = value;
        }
    });

}
////---------------------- Why doesn't _email call the getter? --------------------//
//// Because the getter's name is "email",
//// not "_email".
//// JavaScript treats them as different properties.
//// email  -> getter/setter
//// _email -> normal property
////---------------------- Why use Object.defineProperty()? ------------------------//
//// Before ES6 classes, this was the standard way
//// to create getters and setters.
//// Even today, it is useful when you want
//// fine-grained control over object properties.

