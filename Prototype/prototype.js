// //-------------------------JAVASCRIPT PROTOTYPES-------------------------------//
// // A Prototype is a special object in JavaScript from which
// // other objects inherit properties and methods.
// // Every object in JavaScript has an internal hidden link
// // to another object called its Prototype.
// // This mechanism allows objects to share common methods
// // instead of creating duplicate copies.
// // In simple words:
// // Prototype = Parent Object
// // Child objects can access everything stored inside
// // the Parent Object.
// //-------------------- Why Do We Need Prototypes?----------------------------------//
// // Imagine there are 1 million arrays.
// // Without prototypes:
// // Every array would contain its own copy of push(),
// // pop(), map(), filter(), etc.
// // That would waste a huge amount of memory.
// // JavaScript solves this problem by storing these methods
// // only once inside Array.prototype.
// // Every array simply accesses those methods whenever needed.
// // This saves memory and improves performance.
// //---------------------Prototype Chain-----------------------------------------//
// // Whenever JavaScript cannot find a property or method
// // inside an object, it automatically searches inside
// // its prototype.
// // If still not found,
// // JavaScript keeps moving upward until it reaches null.
// // This searching process is called Prototype Chain
// //--------------------------------------------------------------//
// // Example:
const arr = [1,2,3] //// Internal Prototype Chain : arr -> Array.prototype -> Object.prototype -> null
//// Example:
const obj = {   ////Interna Prototype Chain : obj ->  Object.prototype ->  null
    name:"Eman"
}
////Example:
const str = "Hello" // Internal Prototype Chain : str -> string.proyotype -> object.prototype -> null
//--------------------------------Understanding Your Code-------------------//
let myHeros = ["thor", "spiderman"]
////myHeros is an Array.
////JavaScript automatically creates something like: myHeros -> Array.prototype  ->  Object.prototype -> null
////--------------------------------------------------------------//
//// Since myHeros is an Array,
// //it automatically gets access to:
// //push()
// //pop()
// //map()
// //filter()
// //forEach()
// //reduce()
// //slice()
// //etc.
// //These methods are NOT stored inside myHeros.
// //They are stored only once inside
// //Array.prototype
//--------------------------------------------------------------//
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//// heroPower is a Normal Object.
////Internal Structure: heroPower -> Object.prototype ->  null
////getSpiderPower: function(){
////console.log(`Spidy power is ${this.spiderman}`);
// //}
// //This is simply a Method.
// //A Method = Function stored inside an Object.
////--------------------------------------------------------------//
//// What is "this" here?
//// "this" always refers to the object
// //that is currently calling the method.
// //Suppose
////heroPower.getSpiderPower()
//// JavaScript internally thinks
//this
// //equals
////heroPower
////--------------------------------------------------------------//
// //Therefore
////this.spiderman becomes
 ////heroPower.spiderman
//// which is  "sling"
//// Output
// //Spidy power is sling
//--------------------------------------------------------------//
//// If you write
//console.log(this) //inside method
// Output:
// //{
// // thor:"hammer",
//  // spiderman:"sling",
//  // getSpiderPower:f()
// //}
// //because "this" refers to heroPower.
////-------------------------- Extending Object Prototype-------------------------------//
Object.prototype.hitesh = function(){
    console.log("hitesh is present in all objects")

}
////This line adds a new method
////inside Object.prototype.
//// Before : Object.prototype contained methods like
// // toString()
// // valueOf()
// // hasOwnProperty()
// // After adding : Object.prototype contains
// // toString()
// // valueOf()
// // hasOwnProperty()
// // hitesh()
// //--------------------------------------------------------------//
// // Since almost every object eventually inherits from Object.prototype,every object can now use
// hitesh()
// // Example:
heroPower.hitesh()
// // Output:
// // hitesh is present in all objects
// //--------------------------------------------------------------//
// // Why does this work?
// // JavaScript searches
// // heroPower -> Is hitesh() inside heroPower?  No
// //Move upward
// // Object.prototype -> Found -> Execute
// //--------------------------------------------------------------//
myHeros.hitesh()
// // Surprisingly,this also works.
// // Why? 
// //Because : myHeros -> Array.prototype -> Object.prototype -> null
// // JavaScript first checks:
// // myHeros
// // then
// // Array.prototype
// // then
// // Object.prototype
// // Finds hitesh()
// // Executes it.
// // Output:
// // hitesh is present in all objects
// //--------------------------Extending Array Prototype--------------------------//
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}
// // Here we are adding a new method
// // inside Array.prototype.
// // Before adding this method:
// // Array.prototype already contained methods like:
// // push()
// // pop()
// // shift()
// // unshift()
// // map()
// // filter()
// // reduce()
// // forEach()
// // slice()
// // splice()
// // etc.
// // After this code,
// // Array.prototype also contains
// // heyHitesh()
// //--------------------------------------------------------------//
// // Internal Structure
// // Array.prototype
// // push()
// // pop()
// // map()
// // filter()
// // reduce()
// // heyHitesh()
// //--------------------------------------------------------------//
// // Since every Array inherits from
// // Array.prototype,
// // Every Array can now use
// // heyHitesh()
// // Example:
myHeros.heyHitesh()
// // Output:
// // Hitesh says hello
// //--------------------------------------------------------------//
// // How does JavaScript find it?
// // JavaScript looks inside myHeros
// // Is heyHitesh() present? No
// //Move upward
// //Array.prototype -> Found -> Execute
// //--------------------------------------------------------------//
// // Why does this NOT work?
//heroPower.heyHitesh()
// // Output:
// // TypeError
// // heroPower.heyHitesh is not a function
// //--------------------------------------------------------------//
// // Why?
// // Because heroPower is NOT an Array.
// // Internal Structure : heroPower -> Object.prototype ->  null
// //--------------------------------------------------------------//
// // Notice carefully.
// // heroPower never reaches
// // Array.prototype
// // Therefore JavaScript cannot find
// // heyHitesh()
// // Hence
// // TypeError
// //--------------------------------------------------------------//
// // Very Important Difference
// // Object.prototype methods
// // can be used by
// // Objects
// // Arrays
// // Strings
// // Functions
// // because all eventually inherit from
// // Object.prototype
// //--------------------------------------------------------------//
// // Array.prototype methods
// // can ONLY be used by Arrays.
// // Objects cannot use them.
// //-------------------- Prototype Inheritance----------------------//
// // JavaScript objects can inherit properties and methods from other objects.
// // This mechanism is called Prototype Inheritance
// //Example:
const User = {
    name: "chai",
    email: "chai@google.com"
}
// User object contains:
// name , email
// //Example:
const Teacher = {
    makeVideo: true

}
////Teacher contains only makeVideo
// //Example:
const TeachingSupport = {
    isAvailable: false
}
// // TeachingSupport contains : isAvailable
// //Example:
const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport,
}
// // __proto__ is an old JavaScript syntax used to create inheritance.
// // Here
// // __proto__: TeachingSupport means:
// // TASupport inherits from TeachingSupport
// //--------------------------------------------------------------//
// // Internal Structure : TASupport ->  TeachingSupport -> Object.prototype ->null
// // Therefore
console.log(TASupport.isAvailable)
// // JavaScript searches : TASupport
// //Does TASupport contain
// // isAvailable?
// // No
// // Move upward
// // TeachingSupport
// // Found
// // false
// // Therefore Output:
// // false
// //--------------------------------------------------------------//
// // TASupport can now access
// // makeAssignment
// // fullTime
// // isAvailable
// // even though
// // isAvailable is not inside TASupport.
// // -----------------------Old Prototype Syntax-----------------//
Teacher.__proto__ = User
////This means
// // Teacher inherits from User
// // Internal Structure : Teacher-> User ->  Object.prototype  -> null
// //--------------------------------------------------------------//
// // Now Teacher can access
// // name
// // email
// // although Teacher doesn't contain them.
// // Example
console.log(Teacher.name)
// // JavaScript searches
// // Teacher
// // name ?
// // Not Found
// // Move upward
// // User
// // Found
// // Output:
// // chai
// //--------------------------------------------------------------//
console.log(Teacher.email)
// // Output:
// // chai@google.com
// //--------------------------------------------------------------//
// // This syntax (__proto__)
// // still works, but it is considered OLD and should not be used in modern JavaScript.
// // Instead,use Object.setPrototypeOf()
////------------------------ Modern Prototype Inheritance ------------------------//
Object.setPrototypeOf(TeachingSupport, Teacher)
//// Here:
//// TeachingSupport becomes the Child Object.
//// Teacher becomes the Parent Object.
//// This means:
//// TeachingSupport inherits all accessible properties and methods
//// from Teacher.
//// Before calling Object.setPrototypeOf()
//// Prototype Chain
//// TeachingSupport
//// Object.prototype
//// null
//// At this point TeachingSupport can only access:
//// isAvailable
////--------------------------------------------------------------------------//
// //After calling Object.setPrototypeOf()
// //Prototype Chain
// //TeachingSupport -> Teacher  ->  User ->  Object.prototype  -> null
// //Why does User appear?
// //Because earlier we already wrote:
// //Teacher.__proto__ = User
// //Therefore Teacher already inherits from User.
// //Now TeachingSupport inherits from Teacher,
// //and Teacher inherits from User.
//--------------------------------------------------------------------------//
// //Now TeachingSupport can access:
 TeachingSupport.isAvailable
// //Output:
// //false
 TeachingSupport.makeVideo
// //Output:
// //true
TeachingSupport.name
// //Output:
// //"chai"
TeachingSupport.email
// //Output:stored email da gi
//----------------------------String Prototype--------------------------//
// //Creating a String
let anotherUsername = "ChaiAurCode         "
// //Notice carefully.
// //There are extra spaces at the end of the string.
// //Internally it looks like:
// //"ChaiAurCode_____"
////--------------------------------------------------------------------------//
// //If we check the length
console.log(anotherUsername.length)
// //Output:16   Because JavaScript counts spaces as characters.
// //Normally we write
// //anotherUsername.trim().length
////trim() removes spaces from the beginning and end of the string.
// //Example
// //"ChaiAurCode     "
// //After trim()   "ChaiAurCode"
// //But writing
// //trim().length
// //every time becomes repetitive.Instead , we create our own method.
////------------------------Extending String.prototype ----------------------//
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
////--------------------------------------------------------------------------//
//// What is happening here?
//// We are adding a new method named trueLength() inside String.prototype
////Since every string inherits from String.prototype,
// //every string automatically gets access
// //to trueLength().
////--------------------------------------------------------------------------//
//// Prototype Chain: anotherUsername ->  String.prototype ->  Object.prototype ->  null
// //JavaScript first searches inside anotherUsername.
// //If trueLength() is not found,
// //it moves to String.prototype.
// //There it finds the method and executes it.
// //Example 1:
anotherUsername.trueLength()
// //Here
// //this == anotherUsername
// //Therefore JavaScript executes
// //anotherUsername.trim().length
////--------------------------------------------------------------------------//
//// Example 2:
"hitesh".trueLength()
//// Here
//// this == "hitesh"
// //Therefore JavaScript executes
// //"hitesh".trim().length
////--------------------------------------------------------------------------//
// //Example 3:
"iceTea".trueLength()
// //Here
// //this == "iceTea"
// //Therefore JavaScript executes
// //"iceTea".trim().length
console.log(`${this}`)
// //This prints the string that called the method.
// //Example:
anotherUsername.trueLength()
// //Output : ChaiAurCode (The original string is printed,including any spaces that were present.)
////--------------------------------------------------------------------------//
this.trim().length
// //Remove extra spaces "ChaiAurCode     "  becomes "ChaiAurCode" Count remaining characters
//// Output:
// //11
////--------------------------------------------------------------------------//
// //Complete Output:
anotherUsername.trueLength()
// //Output:
// //ChaiAurCode
// //True length is: 11
////--------------------------------------------------------------------------//
"hitesh".trueLength()
// //Output:
// //hitesh
// //True length is: 6
////-------------------------------------------------------------------------//
"iceTea".trueLength()
// //Output
// //iceTea
// //True length is: 6
////--------------------------------------------------------------------------//
// //Why does this work?
// //Every string in JavaScript inherits from
// //String.prototype
// //String.prototype already contains methods like
//// trim()
// //slice()
//// replace()
// //includes()
// //toUpperCase()
// //toLowerCase()
// //startsWith()
// //endsWith()
////We simply added one more method
//// trueLength()  Therefore every string can use it.

