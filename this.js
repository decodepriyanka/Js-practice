const user = {
    name:"Priyanka",
    logMessage(){
        console.log(this.name);
    }
}
setTimeout(user.logMessage,1000)
// op - undefined 

/*reason - setTimeout does not retain the this context of the object is due to how JavaScript
handles function references and context. When you pass a method as a callback, it loses its association
with the object it was originally a method of.calling it as a regular function. Therefore, this inside 
logMessage is not the user object but rather 
the global object (in non-strict mode) or undefined (in strict mode).
*/
/* fix this - rather thN Calling it as a callback wrap it inside a function and call the method */

const user = {
    name:"Priyanka",
    logMessage(){
        console.log(this.name);
    }
}
setTimeout(function(){
   user.logMessage() 
},1000)

op/ priyanka

/*
Method Invocation:
When you invoke a method using the object (e.g., user.logMessage()), this inside the method refers to the object 
before the dot (i.e., user).

Function Invocation:
When a function is invoked without an object reference (e.g., logMessage()), this inside the function refers to 
the global object (or undefined in strict mode).
*/


