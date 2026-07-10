//1. What is a Promise?
//A Promise is a JavaScript object that represents the eventual completion (success) or failure of an asynchronous operation and its resulting value.
//A Promise is used to handle asynchronous operations more efficiently than callbacks.
//A Promise is an object that promises to provide a result in the future.
//The result may be:
//Success (Resolved)  , Failure (Rejected)
//----------------------------------------------------------//
//2. Why Do We Need Promises?
//Before Promises, asynchronous operations were handled using callbacks.
//When multiple asynchronous tasks depended on each other, callbacks became deeply nested.
//Example:
// login(function () {

//     getUser(function () {

//         getPosts(function () {

//             getComments(function () {

//             });

//         });

//     });

// });
//This creates Callback Hell (also called the Pyramid of Doom).
//Problems with Callback Hell:
//Difficult to read
//Difficult to maintain
//Difficult to debug
//Error handling becomes complicated
//Promises solve these problems by making asynchronous code cleaner and easier to manage.
//------------------------------------------------------------------------------------//
//3. Promise States
//Every Promise has three possible states.
//1.Pending
//The asynchronous operation is still running.
//Example:
//Downloading file...
//The Promise has neither succeeded nor failed.
//2.Fulfilled (Resolved)
//The operation completed successfully.
//Example:
//File downloaded successfully.The Promise now contains the result.
//3.Rejected : The operation failed.
//Example:
//Network Error
//The Promise contains the reason for failure.
//-------------------------------------------------------------------------------------//
//Promise Lifecycle
    //       Promise Created
    //              │
    //              ▼
    //          Pending
    //       ┌──────────┐
    //       │          │
    //       ▼          ▼
    //   Fulfilled   Rejected
    //       │          │
    //    then()     catch()
    //        \        /
    //         \      /
    //         finally()
// while searching some questions from chatgpt this cycle is very helpful to understand.
//-------------------------------------------------------------------------------------//
//About Promise Syntax
//Executor Function
// function(resolve, reject){
// }
// This function is called the executor function.
// It runs immediately when the Promise is created.
// JavaScript automatically provides two functions:
// *resolve()
// *reject()

// **resolve()
// resolve() is used when the asynchronous task completes successfully.
// Example
// resolve();
// or
// resolve(data);
// Calling resolve() changes the Promise state from
// Pending
//    ↓
// Fulfilled
// The value passed to resolve() becomes available in .then().

// **reject()
// reject() is used when something goes wrong.
// Example
// reject("Network Error");
// Calling reject() changes the Promise state from

// Pending
//    ↓
// Rejected
// The value passed to reject() becomes available in .catch().
//--------------------------------------------------------------------------------//
//Example 1:
const promiseOne = new Promise(function(resolve, reject){ //Creates a new Promise object
    setTimeout(function(){ //Explanation :setTimeout() simulates an asynchronous task.
                            // JavaScript starts the timer and continues executing other code.
                            // After 1 second:
                            //  "Async task is complete" is printed.
                            // resolve() changes the Promise state from Pending → Fulfilled.
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){ //then() is used to consume a resolved Promise.It executes only after resolve() is called.
    console.log("Promise consumed");
})
//------------------------------------------------------------------------------------------//
//Example 2:
new Promise(function(resolve, reject){  //Instead of storing the Promise in a variable, const promise = new Promise(...)
                                        //we create it and immediately consume it.
                                        //This is useful when the Promise will be used only once.
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})
//----------------------------------------------------------------------------------------------//
//Example : 3
//Passing Data with resolve()
// Explanation
// resolve() can pass any JavaScript value:
// Number
// String
// Array
// Object
// Boolean
// The value passed to resolve() becomes available inside .then().
// promiseThree.then(function(user){
//     console.log(user);
// })
// Here,
// user
// contains

// {
//     username:"Chai",
//     email:"chai@example.com"
// }
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})
//-------------------------------------------------------------------------//
//Example : 4 :// Example 4: Promise Chaining, catch() and finally()
// This example introduces three new concepts:
// 1. Promise Chaining
// 2. Error Handling using catch()
// 3. Cleanup using finally()
const promiseFour = new Promise(function(resolve, reject){
     // Simulating an asynchronous task
    setTimeout(function(){
        let error = true // This variable is only used for testing.
        // If error = false -> Promise resolves.
        // If error = true  -> Promise rejects.
        if (!error) { // ! means NOT.if(!error) becomes true only when error is false.
            // Promise becomes Fulfilled.
            // The object passed to resolve()
            // will be received inside the first .then().
            resolve({username: "hitesh", password: "123"})
        } else {
             // Promise becomes Rejected.
            // The string passed to reject()
            // will be received inside .catch().
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
 promiseFour // Consuming the Promise
 .then((user) => {
    console.log(user); // 'user' contains the object passed to resolve().
    return user.username // Whatever is returned from one .then() becomes the input of the next .then().
}).then((username) => { // Receives the value returned from the previous .then().
    console.log(username);
}).catch(function(error){ // Runs only when reject() is called.
    console.log(error);  // 'error' contains the value passed to reject().
}).finally(() => console.log("The promise is either resolved or rejected")) // finally() always executes whether the Promise
// is resolved or rejected.
// Common uses:
// - Hide loading spinner
// - Close database connection
// - Stop loading animation
//---------------------------------------------------------------------------//
// Promise Chaining Flow
// Promise
//    │
// resolve(user)
//    │
// .then(user)
//    │
// return user.username
//    │
// .then(username)
//    │
// catch(error) (only if rejected)
//    │
// finally()
//--------------------------------------------------------------------------------//
// Example 5 : async / await
// async/await is another way to work with Promises.
// It performs the same task as .then() and .catch()
// but makes the code easier to read.
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});
// async tells JavaScript that this function
// will work with Promises.
// Only inside an async function can we use await.
async function consumePromiseFive(){
    try { // try...catch is used with async/await to handle rejected Promises.
        const response = await promiseFive
        console.log(response);
    } catch (error) { // If the Promise rejects,execution immediately jumps here.
        console.log(error);
    }
}
consumePromiseFive() //Function must be called to execute.
//-------------------------------------------------------------//
// Difference
// **Promise Style
// promise
// .then()
// .catch()
// **async/await Style
// try{
//     const response = await promise;
// }
// catch(error){
//
// }
// Both perform the same task.
// async/await simply provides cleaner syntax.
//---------------------------------------------------------------//
// //Example: Fetching Data using async/await
// //This function demonstrates how to make an API request using
// ////the Fetch API with async/await instead of .then() and .catch().
// async function getAllUsers(){
// //try...catch is used to handle errors that may occur // during the asynchronous operation.
//     try {
// //*fetch() sends an HTTP GET request to the given URL. // fetch() always returns a Promise. await pauses this async function until the Promise returned by fetch() is fulfilled.
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')//'response' is NOT the actual user data.It is a Response object returned by the server.
//         const data = await response.json() //response.json() converts the JSON response into a JavaScript object. response.json()                                                also returns a Promise,so we use await again.
//         console.log(data); // 'data' now contains the actual JavaScript object . returned by the API.
//     } catch (error) { // Executes if the request fails // or the Promise is rejected.
//         console.log("E: ", error);
//     }

// getAllUsers()
// }
//---------------------------------------------------------------------//
//Example: Fetching Data using Promise (.then() and .catch())
fetch('https://api.github.com/users/hiteshchoudhary') //fetch() sends an HTTP GET request to the given URL.It immediately returns a Promise.
.then((response) => { //Executes after the fetch() Promise is resolved.response is a Response object, not the actual API data.
 return response.json()// Converts the JSON response into a JavaScript object.response.json() also returns a Promise.
                     //return passes this Promise to the next .then().
})
.then((data) => { //Executes after response.json() finishes.data contains the actual JavaScript object returned by the API.
    console.log(data); //Prints the complete API data to the console.
})
.catch((error) => console.log(error)) //Executes if any Promise in the chain is rejected.Prints the error (e.g., network failure or no internet)

