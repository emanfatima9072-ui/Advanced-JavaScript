// // # Video 37: Asynchronous JavaScript
// // 1. What is Synchronous JavaScript?
// // JavaScript executes code one line at a time.
// // It doesn't move to the next line until the current line finishes.
// // Example:
// console.log("First");
// console.log("Second");
// console.log("Third");
// // Output:
// // First
// // Second
// // Third
// // This is called synchronous execution because the code runs in sequence.
// // Notes:
// // Executes code line by line.
// // Waits for the current task to finish before starting the next.
//=====================================================================
// // 2. Problem with Synchronous Code
// // Imagine this:
// console.log("Start");
// // Takes 5 seconds
// for(let i = 0; i < 10000000000; i++) {}
// console.log("End");
// // Output:
// // Start
// // (wait 5 seconds)
// // End
// // During those 5 seconds, the browser freezes because JavaScript is busy.
//============================================================================//
// //3. What is Asynchronous JavaScript?
// //Asynchronous JavaScript allows **time-consuming tasks** to happen **without blocking the rest of the program**.
// //Instead of waiting, JavaScript continues executing the next lines.
// //Example:
// console.log("Start");
// setTimeout(function () {
//     console.log("Hello");
// }, 2000);
// console.log("End");
// //Output:
// //Start
// //End
// //Hello
// // Notice:
// // *setTimeout() does not block the program
// // *JavaScript continues running.
// // *After 2 seconds, the callback function executes.
//===============================================================================-//
// 4. Why Do We Need Async?
// Some tasks take time:
// * API requests
// * Database queries
// * Downloading files
// * Reading files
// * Timers
// If JavaScript waited for all these tasks, the webpage would become unresponsive.
//=======================================================================//
// //5.setTimeout()
// //Syntax:
// //setTimeout(callbackFunction, delayInMilliseconds);
// //Example:
// setTimeout(function () {
//     console.log("Executed after 3 seconds");
// }, 3000);
// //* The callback runs after approximately 3 seconds.
// //* Meanwhile, JavaScript can execute other code.
//==================================================================================
// 6. Callback Function
// A callback is a function passed as an argument to another function.
// Example:
// setTimeout(function () {
//     console.log("Hello");
// }, 1000);
// Here:
// function () {
//     console.log("Hello");
// }
// is the callback function.
//======================================================================================

