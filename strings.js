// STRINGS ARE USED  TO CREATE A COOLECTION OF CHARECTERS
// EX
// let name="debnashu"
// console.log(name);
// template literals
// instead of quotes we use backticks which are called template literals whhich is very useful
// ex
let star_name = `slayer`
console.log(star_name);
// we can insert special charecters like double quotes inside it  also we caa insert varibales in it 
let word=`"the name is "is" slayer "op""`
//note-in js we cant add same string inside a string ex-double quote inside double quote but it is possible by using back ticks also known as string interpolation
// console.log(word);
// let b=`the name is ${star_name}`//better representation of string interpolation
// console.log(b);
// some escape sequence charecters
// \n
// \t
// \r
// string proeprties and methods
let a="debanshu "
a.length;//returns the length of the string 
let b='SLAYER'
b.toLocaleLowerCase();
let c="debanshu ";//here the index starts form 0 till n-1
c.slice(2,4);
let c2="debanshu ";//here the slciing will starts from 2 to n-1
c.slice(2);
let d="debanshu bruhhhhh"
let new_d =d.replace("bruhhhhh","brahhhhhhh");//replacing the string
let e="slayer"
let e1="is a "
let e3="good assulteer"
let e4 =e.concat(e1,e3);//form= stringwith which wehave to concat.the strings to be concated with the first one with(.)...
let f="        debanshu        "
let newf=f.trim()//trim()will remove the white spaces

console.log(a,b,c,c2,new_d,e4,newf);

       let sTring="please give rs 1000"
let new_sTring=sTring.slice(sTring.length-4)
console.log(new_sTring);
let z="were you able to do itabfasdjkrhbfsdfjksdbutfksdjngujksdhg sdklngjksdngmnxcjnvjkuxcbjgsdjkgnm,sd "
let new_z=z.slice(0,4)+"s"+z.slice(5,z.length-1)
console.log(new_z);
// 5- we can replace some charecters like % etc etc through replace method.
let url = "debanshupati12345@gmail%20com"
let curl = url.replace("%20", ".")
//   console.log(curl).





