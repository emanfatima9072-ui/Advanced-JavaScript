const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
//// JavaScript first looks at the object
////Math : Math is a built-in object.
////It already contains
////many mathematical properties
////like
////Math.PI
////Math.sqrt()
////Math.random()
////----------------------------------------------------------//
//// Object.getOwnPropertyDescriptor()
//// asks JavaScript to create
//// a report about a property.
// This report tells us:
//
// • What is its value?
// • Can its value change?
// • Will it appear in loops?
// • Can its settings be changed?
////"Tell me everything
////about this property."
////It returns information like
////----------------------------------------------------------//
////PI : JavaScript searches for the property PI inside the Math object.
////----------------------------------------------------------//
////const descripter : The returned information
//// is stored inside  descripter
////We can print it later
//// using
console.log(descripter)
//// Output
//// {
////     value: 3.141592653589793,
////     writable: false,
////     enumerable: false,
////     configurable: false
//// }
//// The output contains four properties.
//// Let's understand each one.
////-------------------1.value-----------------------------------//
////value : 3.141592653589793
//// value stores
//// the actual value
//// of the property.
//// Therefore
////Math.PI  returns  3.141592653589793
//-----------------------2.writable---------------------------------//
////writable : false
//// writable decides
//// whether we can
//// change the value
//// of a property.
////writable false Therefore
////Math.PI = 5
//// will NOT
//// change the value.
////------------------------3.enumerable------------------------------------//
////enumerable : false
//// enumerable decides
//// whether the property
//// appears during looping.
//// For example:
////Object.keys(Math)
//// or
////for(let key in Math)
//// PI will not appear
//// because enumerable is false.
//--------------------------4.configurable-----------------------------------//
////configurable : false
////configurable decides
////whether we can
////change the property's
////settings later.
//// Since configurable is false
//// we cannot
//// delete the property
//// or change
//// its descriptor.
////-------------------------Can We Change Math.PI ?------------------------------------//
////Let's first print
////the value of Math.PI.
console.log(Math.PI)
////Output : 3.141592653589793
////----------------------------------------------------------//
Math.PI = 5
//// Here we are trying
//// to change the value
//// of Math.PI.
//// But JavaScript
//// first checks
//// the descriptor
//// of Math.PI.
////The descriptor says
//// writable : false
//// Since writable is false,
//// JavaScript does NOT
////allow the value
////to be changed.
////----------------------------------------------------------//
console.log(Math.PI)
//// Output : 3.141592653589793
////The value is still
////the same.
////Math.PI was NOT changed.
////----------------Creating an Object---------------------------//
const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bni");

    }

}
//// This creates an object named chai
////The object contains four properties.
////----------------------------------------------------------//
////1.name : "ginger chai"  -> Stores the name of the chai.
////2.price : 250           -> Stores the price of the chai.
////3.isAvailable : true    -> Stores whether the chai is available or not.
////4.orderChai : function(){...} -> Stores a function inside the object.
//// A function inside
////an object is called
////a method.
////------------------Getting the Descriptor------------------------------//
console.log(
Object.getOwnPropertyDescriptor(chai,"name")
)
//// JavaScript searches for the property  name inside the chai  object.
//// Then it returns the descriptor of that property.
////Output:
//// {
////     value : "ginger chai",
////     writable : true,
////     enumerable : true,
////     configurable : true
//// }
//// Notice : Unlike Math.PI,All normal object properties are
////writable
////enumerable
//configurable
//// by default.
////---------------------- Object.defineProperty()----------------------------//
Object.defineProperty(chai,"name",
{    
    //// writable:false,
      enumerable:true
})
//// Object.defineProperty() is used to change the descriptor of a property.
//// chai : First argument  Tells JavaScript which object should be modified.
//// "name" : Second argument Tells JavaScript which property should be modified.
//// {  enumerable:true } :  Third argument Contains the new descriptor settings.
////enumerable:true  -> enumerable was already true.Therefore nothing changes.
////-----------------------Reading the Descriptor Again-----------------------------//
console.log(
Object.getOwnPropertyDescriptor(chai,"name")
)
//// JavaScript again
//// returns the descriptor
//// of chai.name
////Since nothing
//// actually changed,
////the descriptor
//// remains the same.
//---------------------------- Object.entries()-------------------------------------------//
Object.entries(chai)
//// Object.entries() converts an object
//// into an array.Each element of the array contains [key,value]
// Example:
// [
//     ["name","ginger chai"],
//     ["price",250],
//     ["isAvailable",true],
//     ["orderChai",function(){ }]
// ]
for(let [key,value] of Object.entries(chai)){
//// for...of visits one element at a time.
//// [key,value] This is called Array Destructuring.It stores First value into key Second value into value
//// First Iteration : key = "name"  , value = "ginger chai"
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
//// typeof returns the type of a value.Here
//// typeof "ginger chai"  -> "string" .  Since "string" is not equal to "function"
//// JavaScript prints : name : ginger chai
////----------------------------------//
//// Second Iteration :
////  key = "price" 
//// value = 250 
//// typeof value : "number" -> Printed
////---------------------------------------//
//// Third Iteration
//// key = "isAvailable"
//// value = true
//// typeof value : "boolean"  -> Printed
////-----------------------------------------//
//Fourth Iteration
//// key = "orderChai"
//// value = function(){ }
//// typeof value
//// "function"
//// Condition becomes false
//// Nothing is printed.
////--------------------Final Output--------------------------//
//// name : ginger chai
//// price : 250
//// isAvailable : true
//--------------------Complete Program Flow----------------------//
// Read Math.PI Descriptor
// ↓
// Try to change Math.PI
// ↓
// JavaScript checks
// writable
// ↓
// Value cannot change
// ↓
// Create chai object
// ↓
// Read descriptor
// of chai.name
// ↓
// Modify descriptor
// using
// Object.defineProperty()
// ↓
// Read descriptor again
// ↓
// Convert object
// into entries
// ↓
// Loop starts
// ↓
// Functions skipped
// ↓
// Remaining properties printed