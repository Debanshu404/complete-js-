//fucntions vs methods 
// funtions=the block of code which is used to execute a line of statements whenever called is called fucntiobns 
// methods =functions wrapped inside a object and can be asceesd by object methods is called methods 
const Maths ={
    E:2.718281828459045,
    pi:3.14,
    a:function add(a,b){
    return a*b;
},
 cube(a){//its a es5 version part where we can define a meho like this 
    return a*a*a;
},
}
console.log(Maths.a(4,5))
console.log((Maths.E)*(Maths.pi))
console.log(Maths.cube(3))
