// **********************************************************************************************************************FUNCTIONS IN JAVASCRIPT
// PEHLA JAVA SCRIPT KA FUNCTIONS;

function sayname(){
    console.log("D")
    console.log("E")
    console.log("B")
    console.log("A")
    console.log("N")
    console.log("S")
    console.log("H")
    console.log("U")
  }
  // console.log(sayname())
  // function addTwoNumber(num1,num2){ num1 and num2 parameter he
  //  console.log( num1+num2)
  
  // addTwoNumber(5,6) 5 and 6 arguments he;
  
  function multipylTwoNumbers(num1,num2){
  
  //  return (num1*num2); use this to actually store the value insode the fucntion.
  
  }
   const reasult=multipylTwoNumbers(4,3)
  // console.log(reasult)
  
  function userLogin(username){
  
    if(!username){
      console.log("please enter a valid username")
      return;
    }
  
      return `${username} has just logged in`
  }
  
  // console.log(userLogin("debanshu"))
  
  function cartTotal(...num1){
    return num1;
  }
  // console.log(cartTotal(200,40,400,125,500,2000,999))
    //  console.log(cartTotal(200,40,400,125,500,2000,999)) to deal with this issue we use rest operator which is basically(...)it is similar to sprad,and it converts this set of vlaues to array so that we cna perform methods to further solve it.
  
  const user={
    uSername:"debanshu",
    course:"complete web dev",
    price:600,
    instructor:"slayer"
  }
  
    function handleObject(anyThing){
      console.log(`hello ${anyThing.uSername},your course ${anyThing.course},of price ${anyThing.price},will be assist by our course instructor mr.${anyThing.instructor},form monday onwards.`)
  
    }
  
    // handleObject(user);
  // The method you used, where you pass an object as an argument to a function and then access its properties within the function, is a common technique in JavaScript and is often referred to as "object destructuring" or "object parameter destructuring."
  
  // we cna also add arrays to this.
  
  const myNewArray=[200,400,500,600]
  
  function returnSecondValue(getAray){
    return getArray[1]
  }
  // console.log(returnSecondValue(myNewArray))
  // console.log(returnSecondValue([200,400,500,800,9020,400]));
  // *******************************************************************************************************************************************************
  //****************************************** */ scopes in javascript***************************************************************



function one(){
  const username="debanshu"
  function two(){
    console.log(website);
    const website ="youtube"
    console.log(username);
    
    
  }
  two()


}
one()

if(true){
  const username="debanshu"
    if(username==="debanshu"){
      const website =" youtube"
      // console.log(username+website)
      // console.log(website)
    }
    // console.log(username)
  }

// intresting concept 
// console.log(addone(5))
function addone(num){
  return num +1
}
// console.log(addTwo(3)) this concept is called hoisting


const addTwo= function(nuM){
  return nuM + 5;
}

// const usEr={
//   username:"debanshu",
//   price:60,


// welcome:function(){
//   console.log(`${this.username},welcome to the website`)
  // console.log(this)
// }
// }
// usEr.welcome()
// usEr.welcome="tony ";
// usEr.welcome()






// function op(){
//   console.log("hello");

// }
// op()
// op()
const chai=function(){
  let username="debanshu"
  // console.log(this.username)
}
// chai()
 const hello=() => {
  let username="hayato"
  console.log(this);
 }
//  hello()
// difference between arrow fucntion and normal fucntion.

// There are several differences between arrow functions (also known as fat arrow functions) and normal functions (also known as function declarations or function expressions). Here's a summary of the key differences:

// Syntax:

// Arrow Function: Arrow functions have a concise syntax using the => arrow token.
// Normal Function: Normal functions are defined using the function keyword followed by the function name and parameters.
// Binding of this:

// Arrow Function: Arrow functions do not have their own this context. Instead, they lexically capture the this value from the enclosing scope.
// Normal Function: Normal functions have their own this context, which is determined by how they are called. The value of this inside a normal function depends on how the function is invoked.
// Arguments object:

// Arrow Function: Arrow functions do not have their own arguments object.
// Normal Function: Normal functions have their own arguments object, which is an array-like object containing all the arguments passed to the function.
// Use of new:

// Arrow Function: Arrow functions cannot be used as constructor functions with the new keyword.
// Normal Function: Normal functions can be used as constructor functions with the new keyword to create new object instances.
// Lexical Scope:

// Arrow Function: Arrow functions have a lexical this scope, meaning they inherit the this value from their surrounding code.
// Normal Function: Normal functions have a dynamic this scope, meaning the value of this depends on how the function is called.
// prototype property:

// Arrow Function: Arrow functions do not have a prototype property.
// Normal Function: Normal functions have a prototype property, which can be used for object inheritance.
// more about arrow fucntion.
// In summary, arrow functions and normal functions have differences in syntax, behavior regarding this, handling of arguments, use with new, and more. The choice between them depends on the specific requirements and context of your code.

const addTwO =(num1,num2)=>{
  return num1+num2
}
// console.log(addTwO(3,45616416526521651)) this is known as explicit return
// anathor way 
const AddTwo=(num1,num2)=> (num1+num2)
// console.log(AddTwo(6565464,5484611)) implicit return without that parenthesis we cant add the objects.
// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFFE);    GLOBAL SCOPE kE POLLUTION KO HATANE KE LIYE YE FUNCTION USE KIA HE
//  EXAMPLE
(function coffe(){
  // console.log(`DB CONNECTED`); THIS IS A NAMED IFE
})();

( ()=>{
  // console.log("DB CONNECTED REL 5"); HERE WE HAVE TO PUT SEMI COLONE IN ORDER TO STOP THE EXECUTION OF IFFE COZ IFFE KO PATA NAHI CHAL PATA KI EECUTION STOP KAHA KARE.
  // AND ALSO IT IS CALLED SIMPLE IFFE
})();

