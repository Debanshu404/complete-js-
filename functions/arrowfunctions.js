// arroe functions


// normal functions delarations
function sum(a,b){
    return a+b;
};
console.log(sum(2,4))
//function expression 
const sub= function (a,b){
    return a-b;
}
console.log(sub(4,2))
//arrow function
const mult =(a,b) =>{
    return a*b;
}//explicit reurn
console.log(mult(4,2))
const division =(a,b) => a/b;//iplicit reurn -here we doesnt use return keyword
console.log(division(4,2))