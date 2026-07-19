////----------------------- JavaScript Arrays Internals (V8 Engine) -----------------------//
//// Arrays are one of the most commonly used data structures in JavaScript.
//// Although they look simple from the outside,
//// JavaScript engines (like Google's V8 engine)
//// perform many internal optimizations to make array operations faster.
//// V8 does NOT store every array in the same way.
//// Depending on:
//// - The type of values stored
//// - Whether the array has empty indexes (holes)
//// - How the array is created and modified
//// V8 chooses different internal representations
//// called Elements Kinds.
//// Understanding these optimizations helps us:
//// Write faster JavaScript code.
//// Avoid performance pitfalls.
//// Understand why some array operations are slower.
//// Perform better in JavaScript interviews.
//// 1. Basic array creation
const denseArray = [1, 2, 3, 4, 5]; // Dense: contiguous indexes starting at 0
////----------------------- 1.Dense Arrays -----------------------//
//// A Dense Array is an array where
//// almost every index contains a value.
//// Example:
const dense = [10,20,30];
//// Index
//// 0 -> 10
//// 1 -> 20
//// 2 -> 30
////----------------------------------------------------------------//
console.log("Dense array:", denseArray);
////----------------------- 2.Sparse Arrays -----------------------//
//// Sparse means there are many missing indexes.
//// Example:
const sparse = [];
sparse[1000] = 5;
console.log(sparse.length);
//// Output:
//// 1001
//// Only index 1000 contains a value.
//// Remaining indexes are empty.
//---------------------------------------------------------------//
////Sparse array example
const sparseArray = [];
sparseArray[0] = 1;
sparseArray[1000] = 2; // Creates a large gap
console.log("Sparse array length:", sparseArray.length); // 1001
console.log("Sparse array keys:", Object.keys(sparseArray)); // ['0', '1000']
////-----------------------3. PACKED Arrays -----------------------//
//// A Packed Array is an array
//// with NO empty indexes.
//// Example:
////const packed = [10,20,30];
////----------------------- 4.HOLEY Arrays -----------------------//
//// A Holey Array contains
//// one or more empty indexes.
//// Example:
////const holey = [10,,30];
////----------- V8 internally stores-------------------------//
////Dense arrays in a contiguous memory block (fast access)
////Sparse arrays as hash maps (slower access)
///-----------------Element kinds in V8------------------//
//// V8 optimizes arrays based on element type:
////  - PACKED_SMI_ELEMENTS: Small integers
////  - PACKED_DOUBLE_ELEMENTS: Floating-point numbers
////  - PACKED_ELEMENTS: Mixed types
////  - HOLEY_ variants: Arrays with "holes" (missing indexes)
////----------------------- SMI Elements -----------------------//
//// SMI means Small Integer.
//// These are integer values.
//// Examples:
//// 1
//// 20
//// 300
//// -15
////const numbers = [1,2,3];
//// Internal:
//// PACKED_SMI_ELEMENTS
////----------------------- DOUBLE Elements -----------------------//
//// DOUBLE means Floating Point Numbers.
//// Example:
////const arr = [1.5,2.8,3.14];
//// Internal:
//// PACKED_DOUBLE_ELEMENTS
////----------------------- PACKED_SMI_ELEMENTS -----------------------//
//// PACKED
//// Means there are NO empty indexes (holes).
//// SMI
//// Means Small Integer.
//// These are whole numbers like:
//// 1, 20, 300, -5
//// ELEMENTS
//// Means V8 stores the array using this internal representation.
//// Example:
const arr = [10, 20, 30];
console.log(arr);
//// Internal:
//// PACKED_SMI_ELEMENTS
////----------------------- Elements Kind Transition -----------------------//
//// V8 tries to keep arrays in the most optimized form
//// As new values are added,
//// the Elements Kind may change.
//// Important:
//// Elements Kind only moves in one direction.
//// Once it becomes less optimized,
//// it generally does NOT go back.
////-------------------------- Example 1-------------------------//
//// PACKED_SMI_ELEMENTS
const arr1 = [10, 20, 30];
console.log(arr1);
//// Internal:
//// PACKED_SMI_ELEMENTS
//// ------------------------Example 2-----------------------------//
//// Adding a Decimal Number
const arr2 = [10, 20, 30];
arr2.push(40.5);
console.log(arr2);
//// Output:
//// [10,20,30,40.5]
//// Internal Transition:
//// PACKED_SMI_ELEMENTS -> PACKED_DOUBLE_ELEMENTS
////Reason :
//// Because decimal numbers cannot be stored
//// as Small Integers (SMI).
//// -------------------------------Example 3------------------------------//
//// Adding Different Data Types
const arr3 = [10,20,30];
arr3.push("JavaScript");
console.log(arr3);
//// Output:
//// [10,20,30,"JavaScript"]
//// Internal Transition:
//// PACKED_SMI_ELEMENTS -> PACKED_ELEMENTS
//// --------------------------------Example 4-------------------------------//
//// Multiple Transitions
const arr4 = [1,2,3];
//// PACKED_SMI_ELEMENTS
arr4.push(4.5);
//// PACKED_DOUBLE_ELEMENTS
arr4.push(true);
//// PACKED_ELEMENTS
console.log(arr4);
////----------------------- Packed to Holey Transition -----------------------//
//// Creating just ONE empty index
//// changes the array to Holey.
const numbers = [1,2,3];
numbers[10] = 100;
console.log(numbers);
//// Output:
//// [
////   1,
////   2,
////   3,
////   empty × 7,
////   100
//// ]
//// Internal Transition:
//// PACKED_SMI_ELEMENTS ->  HOLEY_SMI_ELEMENTS
////----------------------- Once Holey, Usually Always Holey -----------------------//
//// After an array becomes Holey,
//// V8 generally keeps it Holey.
//// Even if later every index contains a value.
const holeyArray = new Array(3);
holeyArray[0] = "A";
holeyArray[1] = "B";
holeyArray[2] = "C";
console.log(holeyArray);
//// Although every position now has data,
//// the array generally remains a Holey array.
////----------------------- new Array() -----------------------//
//// Be careful when using:
//// new Array(size)
//// Example:
const arr5 = new Array(5);
console.log(arr5);
//// Output:
//// [ empty × 5 ]
//// V8 treats this as a Holey array.
////Filling the Array
arr5[0] = 10;
arr5[1] = 20;
arr5[2] = 30;
arr5[3] = 40;
arr5[4] = 50;
console.log(arr5);
//// Although all indexes now contain values,
//// V8 generally still remembers
//// that this array started as Holey.
////----------------------- Better Way -----------------------//
const betterArray = [10,20,30,40,50];
console.log(betterArray);
//// This starts as:
//// PACKED_SMI_ELEMENTS
//// which is more optimized.
////----------------------- Using push() -----------------------//
//// If you don't know the size,
//// use push().
const fruits = [];
fruits.push("Apple");
fruits.push("Mango");
fruits.push("Orange");
console.log(fruits);
//// Output:
//// ["Apple","Mango","Orange"]
////----------------------- delete Keyword -----------------------//
//// delete removes an element,
//// but DOES NOT shift other elements.
const nums = [10,20,30];
delete nums[1];
console.log(nums);
//// Output:
//// [10, empty, 30]
console.log(nums.length);
//// Output:
//// 3
//// delete creates a Hole.
////----------------------- splice() Method -----------------------//
//// splice() removes elements
//// and shifts remaining elements.
const values = [10,20,30];
values.splice(1,1);
console.log(values);
//// Output:
//// [10,30]
//// No holes are created.
////----------------------- delete vs splice -----------------------//
//// delete
const a = [1,2,3];
delete a[1];
console.log(a);
//// Output:
//// [1, empty, 3]
//// splice
const b = [1,2,3];
b.splice(1,1);
console.log(b);
//// Output:
//// [1,3]
////----------------------- Best Practices -----------------------//
////Prefer Array Literals.
//// const arr = [1,2,3]
//// Avoid creating holes.
//// arr[100] = 5
//// Not Recommended
//// Use push()
//// when adding new elements.
//// Use splice()
//// instead of delete.
//// Keep similar data types together.
//// Example:
//// [1,2,3]
//// Better than:
//// [1,"Hello",true]

