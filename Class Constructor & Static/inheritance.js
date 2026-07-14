////------------------- JavaScript Inheritance (extends, super, instanceof)--------------------------//
// //-------------------------------------Inheritance--------------------------------------------------//
// //Inheritance is a feature that allows one class
// //to acquire the properties and methods of another class.
// //The existing class is called the Parent (Base) class.
// //The new class is called the Child (Derived) class.
// //This helps us reuse code instead of writing it again.
// //Parent Class:
class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`)
    }
}
////-----------------------Creating a Child Class using extends----------------------------------------------//
// //The 'extends' keyword allows one class to inherit from another class.
// //class Teacher extends User{

// //}
// //Now Teacher automatically gets everything from User.
// //Teacher inherits: constructor() (through super()) , username , logMe()
////------------------------------- Adding More Properties------------------------------------------------------//
////Teacher can have its own properties and methods.
class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}
// //Teacher now has: username , email , password , logMe() , addCourse()
////----------------------------------super()--------------------------------------------------------------------//
// //super() calls the constructor of the parent class.
// //Parent constructor:
// //class User{
// //    constructor(username){
// //       this.username = username
// //    }
// //}
// // //Child constructor
// //class Teacher extends User{
// //    constructor(username,email,password){
// //       super(username)
// //        this.email = email
//  //       this.password = password
//  // }
// // }
// //super(username) means:
// //Call User constructor and initialize username.
// //JavaScript internally does something similar to:
//  //User.call(this, username)
////--------------------- Why is super() Required?-------------------------//
// //If a child class has its own constructor,
// //JavaScript requires calling super()
// //before using 'this'.
// //Wrong
//// class Teacher extends User{
////   constructor(username,email,password){
////        this.email = email
////     }
//// }
// //Output:
// //ReferenceError:Must call super constructor before using 'this'
// //Correct
// class Teacher extends User{
//     constructor(username,email,password){
//         super(username)
//         this.email = email
//         this.password = password
//     }
// }
// //---------------------Creating an Object---------------------------------//
const chai = new Teacher(
    "chai",
    "chai@teacher.com",
    "123"
)
// //JavaScript internally performs:
// //Create empty object
// //Link object with Teacher.prototype
// //Call Teacher constructor
// //super(username)
// //Parent constructor initializes username
// //Child constructor initializes
// //email and password
// //Return object
////Result:
// chai = {
//     username : "chai",
//     email : "chai@teacher.com",
//     password : "123"
// }
////--------------------------Calling Parent Method-----------------------------------//
chai.logMe()
// //Output : USERNAME is chai
// //logMe() is not inside Teacher.
// //JavaScript searches:  chai  -> Teacher.prototype ->  User.prototype ->   Found logMe()
////--------------------------Calling Child Method----------------------------------------//
chai.addCourse()
//// Output : A new course was added by chai
////------------------------------ Creating Parent Object----------------------------------//
const masalaChai = new User("masalaChai")
masalaChai.logMe()
// //Output : USERNAME is masalaChai
////--------------------Protorype Chain---------------------------------------------------//
//// chai object ->  chai ->   Teacher.prototype ->  User.prototype -> Object.prototype  -> null
// //JavaScript searches from top to bottom
// //until it finds the required method.
////---------------------------- instanceof----------------------------------------------------//
//// instanceof checks whether an object
//// belongs to a particular class
//// or inherits from it.
console.log(chai instanceof Teacher)   // Output : true (Because chai was created using Teacher)
console.log(chai instanceof User)      //Output : true (Because Teacher extends User)
console.log(masalaChai instanceof User)//Output : true
console.log(masalaChai instanceof Teacher)//Output:false (Because masalaChai is only a User object)
///----------------------------- Memory Representation-----------------------------------------//
//// that flow chat help me a lot 
// User
//  │
//  ├── constructor()
//  │
//  └── prototype
//       │
//       └── logMe()
//               ▲
//               │
// Teacher
//  │
//  ├── constructor()
//  │
//  └── prototype
//       │
//       └── addCourse()
//               ▲
//               │
// chai object
// {
//     username : "chai",
//     email : "chai@teacher.com",
//     password : "123"
// }
///------------------------Flow of new Teacher()--------------------------------//
//new Teacher(...)
//Empty object created
//Object linked to Teacher.prototype
//Teacher constructor starts
//super(username)
//Parent constructor executes
//username assigned
//email assigned
//password assigned
//Object returned
//----------------------xtends vs super------------------//
// extends Creates an inheritance relationship.
//Example:
// class Teacher extends User
// Teacher inherits from User.
//----------------------------------------------------------//
//super() Calls the parent constructor.
//Example:
//super(username)
//Initializes the parent properties.

