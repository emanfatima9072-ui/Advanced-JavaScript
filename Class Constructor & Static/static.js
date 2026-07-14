////-----------------------JavaScript Static Properties and Methods (static)---------------------------------//
//////---------------------- What is static?--------------------------------------//
//// The static keyword is used to create methods or properties that belong to the class itself.
////They do NOT belong to the objects (instances) created from the class.
////Normally:
////Object → can call normal methods.
////Class → can call static methods.
////Example:
class User1{
    static createId(){
        return "123"
    }
}
// Correct:
User1.createId()
// // Wrong:
// const user = new User()
// user.createId()
// // Output:
// // TypeError:
// // user.createId is not a function
////------------------why we need static------------------------------//
////Sometimes a function does not need any object data.
////Instead of creating an object, we simply call the method directly using the class.
//Common uses:
////--------------------Syntax--------------------------------------//
// class User{
//     static methodName(){
//     }

// }
// // Calling
// User.methodName()
////---------------- --------------------------------------------------//
class User{ 
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return "123"
    }
}
// //constructor()
// //Stores username inside object.
// //logMe()
// //Normal method.
// //Belongs to every object.
// //createId()
// //Static method.
// //Belongs only to User class.
//------------------------Creating an Object-----------------------------//
const hitesh = new User("hitesh") 
// JavaScript performs:
// Create empty object
// Link object with User.prototype
//Run constructor
//username initialized
//Return object
// Object
// hitesh = {
//     username : "hitesh"
// }
//----------------------Calling Normal Method--------------------------------//
hitesh.logMe()
// Output:
// Username: hitesh
// Because logMe()
// belongs to User.prototype.
//-------------------Calling Static Method----------------------------------//
User.createId()
// Output:
// 123 (Because createId() belongs to User class)
//------------------------Why This Gives an Error----------------------------//
//hitesh.createId()
// Output:
// TypeError:
// hitesh.createId is not a function because objects do not receive static methods.
//---------------------Inheritance with static----------------------------------//
class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher(
    "iphone",
    "i@phone.com"
)
//------------------Can Child Class Use Static Methods---------------------------//
Teacher.createId()
// Output : 123 (Because Teacher extends User.Static method are inherited by child classes)
//----------------------Can Child Objects Use Static Methods----------------------//
//iphone.createId()
// Output : TypeError (Because iphone is an object)
//Static methods belong only to classes.
//------------------- Prototype Chain---------------------------//
//iphone -> Teacher.prototype ->  User.prototype ->  Object.prototype -> null
// logMe() is found here.
// createId() is NOT.
// Because static methods
// are stored on the class,
// not inside the prototype.
//-------------------Flow of new Teacher()----------------------------//
// new Teacher()
// Empty object created
// Linked with Teacher.prototype
// Teacher constructor starts
// super(username)
// User constructor runs
// username initialized
// email initialized
// Object returned
//------------ Memory Representation ----------------//
//             User Class
//       ----------------------
//       constructor()
//       createId()   ← Static
//       ----------------------
//              │
//              │ extends
//              ▼
//          Teacher Class
//       ----------------------
//       constructor()
//       ----------------------

// Objects

// hitesh
// │
// ├── username
// └── logMe()

// iphone
// │
// ├── username
// └── email

