// ------------------------OBJECT ORIENTED PROGRAMMING (OOP) in js------------------------//
//OOP (Object-Oriented Programming) is a programming paradigm
//that organizes code into Objects.
//An Object is a collection of:
//• Properties (Variables/Data)
//• Methods (Functions/Behavior)
//As i learn earlier:
// OOP makes code:  Reusable , Organized , Easy to maintain  , Easy to scale
//------------------------------2. Parts of OOP in JavaScript-----------------------------//
//JavaScript supports OOP using:
//1. Object Literals
//2. Constructor Functions
//3. Prototypes
//4. Classes (ES6)
//5. Instances (Objects created using new keyword)
//---------------------------------3. Four Pillars of OOP-------------------------------//
//1. Abstraction
//Hide unnecessary implementation details and expose only what is needed.
// Example:
//We drive a car using the steering wheel and pedals.
//We don't need to know how the engine works internally.
//--------------------------------------------------------------//
//2. Encapsulation
//Wrapping data (properties) and methods (functions)
//together inside a single object.
//--------------------------------------------------------------//
//3. Inheritance
//One class/object can inherit properties and methods
//from another class/object.
//--------------------------------------------------------------//
//4. Polymorphism
//Same method name but different behavior depending
//on the object.
//--------------------------------OBJECT LITERALS---------------//
// Object Literal is the simplest way to create an object.
// It stores related data and functions together.
//Example && Syantax :
const user = {
    username: "eman", //Property
    loginCount: 8, // Property
    signedIn: true, // Property
    // Method (Function inside an object)
    getUserDetails: function () {
        console.log(this);  // "this" refers to the current object.
        // Prints the complete object.
    }
}
console.log(user.username); // Accessing Object Properties
// Output:
// eman
//--------------------------------------------------------------//
// Calling Object Method
user.getUserDetails();
// Output:
// {
// username: "eman",
// loginCount: 8,
// signedIn: true,
// getUserDetails: ƒ
// }
//-----------------------this Keyword-----------------------------------//
// "this" refers to the object that is currently executing
// the function.
// Example:
const user = {
    username: "eman",
    getUserDetails: function () {
        console.log(this.username);
    }

}
user.getUserDetails();
// Output:
// eman
// Here,
// this
// points to
// user
//--------------------------------------------------------------//
//------------------------- Without "this"----------------//
const user2 = {
    username: "eman",
    getUserDetails: function () {
        console.log(username);

    }
}
// Output:
// Error:
// Because JavaScript searches for a variable named
// username in local/global scope.
// It does NOT automatically search inside the object.
// Therefore we use
// this.username
//--------------------------------------------------------------//
//-----------------------Global Context------------------------//
console.log(this);
//Browser Output : Window Object
//Node.js Output : {}
//-------------------------Constructor Function------------------//
// Constructor Function is a blueprint/template
// used to create multiple objects having
// the same properties and methods.
// Constructor functions usually start
// with a Capital Letter.
function User(username, loginCount, isLoggedIn){
    this.username = username; // Stores username inside the object.
    this.loginCount = loginCount; // Stores login count.
    this.isLoggedIn = isLoggedIn; // Stores login status.
    // Adds a method to every object.
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }
    // Not necessary.
    // JavaScript automatically returns the object when using "new".
    return this;

}
// ---------------------------new Keyword----------------------///
// Creates a new object using the constructor function.
const userOne = new User("hitesh",12,true);
const userTwo = new User("ChaiAurCode",11,false);
// userOne
// {
// username: "hitesh",
// loginCount:12,
// isLoggedIn:true,
// greeting:ƒ
// }
// userTwo
// {
// username:"ChaiAurCode",
// loginCount:11,
// isLoggedIn:false,
// greeting:ƒ
// }
////--------------------------What Happens Internally When Using new ?---------------------------//
// A new empty object is created.  - >{}
//"this" starts pointing to that new object .this -> {}
//Constructor function executes.
//this.username = username
//this.loginCount = loginCount
//this.isLoggedIn = isLoggedIn
//JavaScript automatically returns the object.
//-------------------------Why Use Constructor Functions?---------------------------------//
//Without Constructor Function
const user1 = {
    username:"Ali",
    loginCount:5
}
const user2 = {
    username:"Sara",
    loginCount:8
}
const user3 = {
    username:"Ahmed",
    loginCount:15
}
//Same code is repeated again and again.
//--------------------------------------------------------------//
//-------------------- Using Constructor Function--------------//
const u1 = new User("Ali",5,true);
const u2 = new User("Sara",8,false);
const u3 = new User("Ahmed",15,true);
// Only values change.
// Structure remains the same.
///-----------------------return this------------------------------//
// Inside constructor
//return this;
// It returns the newly created object.
// But when using "new"
// JavaScript automatically writes
// return this;
// Therefore this line is optional.
///-----------------Constructor Property-------------------------//
console.log(userOne.constructor);
// Output:
// ƒ User()
// Every object remembers
// which constructor created it.
//console.log(userOne.constructor === User);
// Output
// true
////--------------------Instance-------------------------------//
// An object created from a constructor
// using the "new" keyword is called
// an Instance.
//const student = new User("Ali",7,true);
// student is an Instance of User.
