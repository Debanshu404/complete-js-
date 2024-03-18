// // ******************************************************higher order loops for arrays and objects iteration*******************************************
// //  FOR OF LOOP IN JS
// // for (const variable declaration of the thing you want ot iterate may be some object arrays) {
  
// // }
// // arr=[1,2,3,4,5]
// // for (const num of arr) {
// //   // console.log(num);
// // }
 



// // maps (its an object which holds key value pair) note: it will not work on object ,only for arrays. maps are also not iterable 

// const map =new Map()
// map.set('in',"india")
// map.set('fr',"france")
// map.set('it',"italy")
// map.set('eu',"euroep")
// map.set('usa',"unted states of amaerica")
// map.set('br',"brazil")
// //  map.set('in',"india")

// //  APPLYING FOR OF LOOP IN MAPS
// for (const [Key,Value] of map) {
//    // console.log(Key,"=>",Value);
// }
// const carObj={
//  toyota:"supra",
//  mahindra:"thar",
//  koinigseg:"anymodel", 
//  nissan:"gtr",
// }
// //  }
// // //  for (const [Key,Value] of carObj) {
// //   // console.log(Key "----->",Value) FOR ITERATING OBJECTS WE HAVE SEPARATE LOOPS MENTIONED BELOW BUT WE CAN ALSO USE (Object.entries)TO ITERATE OBJECTS
 
// //  }




// // console.log(map) duplicate vlaues are not logged in map

// // for in :this is for objects

// const myObject = {
//  js: 'javascript',
//  cpp: 'C++',
//  rb: "ruby",
//  swift: "swift by apple"
// }
// for (const key in myObject) {

//    // console.log(`${key} is the shortcut for ${myObject[key]}`);
  
 
// }
// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//  // console.log([Skey])
//  }
//  // SINCE FOR IN LOOP SI SDESIGNED TO ITERATE OVER KEYS HENCE IT IS MADE FOR ITERATION OF OBJECTS BUT NOT MEANT FOR ARRAYS


// const maP = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// for(const Key in maP){
//  // console.log(Key)
// }

// // AGAIN IT SHOWS IT WAS NOT MEANT FOR MAP ALSO




// // for each
// // writing method
// // first define the variable for the object then write the variable with.forEach then give the parenthesis and write funtion with function name and complete its syntax and simply delete the function name and write anathor variable name inside the fucntion wala parenthesis  which the loop will give to all the elements of that variable deifned aboove and write your desired function defination inside the Scope also we can use arrow fucntion

// const variable=["js","py","rb","mysql","html","css"]
// variable.forEach(function (val){
//  // console.log(val)
// })
// // variable.forEach(()=>{
// //   console.log(item);
// // })
// function printMe(item){
//  // console.log(item)
// }
// variable.forEach(printMe);


// // /,/ yha filter ek alag method he for each ka part nahi 
// // const mynum=[1,2,3,4,5,6,7,8,9,10];
// // const newnum=mynum.filter((num)=> num>5);
// // console.log(newnum);
// // const mynum=[1,2,3,4,5,6,7,8,9,10];
// // const newnum=mynum.filter((num)=> {
//  //   return num>4
//  // });
//  // console.log(newnum);
 
//  // AGAR EMRE APS EK ARRAY KE ANDAR MULTIPLE OBJECTS LIKE TAKING DATAS FORM DATABASE
//  const myCoding = [
//    {
//      languageName: "javascript",
//      languageFileName: "js"
//    },
//    {
//      languageName: "java",
//      languageFileName: "java"
//  },
//  {
//    languageName: "python",
//    languageFileName: "py"
//  },
// ];
// myCoding.forEach((item)=>{
//  // console.log(item.languageFileName)
//  // console.log(item.languageName)
// })
// // KYA HO AGAR HAM USE KARE FOR EACH LOOP KO VALUE RETURN KARANE KE LIYE 
// const newNum = [];
// // const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// mynums.forEach((num) => {
//  if (num > 5) {
//    newNum.push(num); // Push the individual number, not the entire array
//  }
// });

// // console.log(newNum);
// // for each loop return nahi karta kuch bhi karo but agr ham chaiye to hame filter function use krna hoga ya fir if statements ka use karna hoga .





// // FILTER FUNCTION
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum=myNums.filter((num)=>{
//  return num>5;
// })
// // console.log(newnum)
// // q- given a set of objects iside a array filter it on your own desires of filter PushSubscriptionOptions. we should also note that if we are using curly braces then we have to write return otherwise error marega.

// const books = [
//  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];
// // ans kala batunga dt 2/9/23











// // const newNums = myNumers.map( (num) => { return num + 10})
// // console.log(newNums);
// // chaining ;

// // ******************************************************higher order loops for arrays and objects iteration*******************************************
// //  FOR OF LOOP IN JS
// // for (const variable declaration of the thing you want ot iterate may be some object arrays) {
  
// // }
// // arr=[1,2,3,4,5]
// // for (const num of arr) {
// //   // console.log(num);
// // }
 



// // maps (its an object which holds key value pair) note: it will not work on object ,only for arrays. maps are also not iterable 

//  const map =new Map()
//  map.set('in',"india")
//  map.set('fr',"france")
//  map.set('it',"italy")
//  map.set('eu',"euroep")
//  map.set('usa',"unted states of amaerica")
//  map.set('br',"brazil")
// //  map.set('in',"india")
 
// //  APPLYING FOR OF LOOP IN MAPS
//  for (const [Key,Value] of map) {
//     // console.log(Key,"=>",Value);
//  }
//  const carObj={
//   toyota:"supra",
//   mahindra:"thar",
//   koinigseg:"anymodel", 
//   nissan:"gtr",
//  }
// //  }
// // //  for (const [Key,Value] of carObj) {
// //   // console.log(Key "----->",Value) FOR ITERATING OBJECTS WE HAVE SEPARATE LOOPS MENTIONED BELOW BUT WE CAN ALSO USE (Object.entries)TO ITERATE OBJECTS
  
// //  }




// // console.log(map) duplicate vlaues are not logged in map

// // for in :this is for objects

// const myObject = {
//   js: 'javascript',
//   cpp: 'C++',
//   rb: "ruby",
//   swift: "swift by apple"
// }
// for (const key in myObject) {

//     // console.log(`${key} is the shortcut for ${myObject[key]}`);
   
  
// }
// const programming = ["js", "rb", "py", "java", "cpp"]
// for (const key in programming) {
//   // console.log([Skey])
//   }
//   // SINCE FOR IN LOOP SI SDESIGNED TO ITERATE OVER KEYS HENCE IT IS MADE FOR ITERATION OF OBJECTS BUT NOT MEANT FOR ARRAYS


// const maP = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// for(const Key in maP){
//   // console.log(Key)
// }

// // AGAIN IT SHOWS IT WAS NOT MEANT FOR MAP ALSO




// // for each
// // writing method
// // first define the variable for the object then write the variable with.forEach then give the parenthesis and write funtion with function name and complete its syntax and simply delete the function name and write anathor variable name inside the fucntion wala parenthesis  which the loop will give to all the elements of that variable deifned aboove and write your desired function defination inside the Scope also we can use arrow fucntion

// const variable=["js","py","rb","mysql","html","css"]
// variable.forEach(function (val){
//   // console.log(val)
// })
// // variable.forEach(()=>{
// //   console.log(item);
// // })
// function printMe(item){
//   // console.log(item)
// }
// variable.forEach(printMe);


// // /,/ yha filter ek alag method he for each ka part nahi 
// // const mynum=[1,2,3,4,5,6,7,8,9,10];
// // const newnum=mynum.filter((num)=> num>5);
// // console.log(newnum);
// // const mynum=[1,2,3,4,5,6,7,8,9,10];
// // const newnum=mynum.filter((num)=> {
//   //   return num>4
//   // });
//   // console.log(newnum);
  
//   // AGAR EMRE APS EK ARRAY KE ANDAR MULTIPLE OBJECTS LIKE TAKING DATAS FORM DATABASE
//   const myCoding = [
//     {
//       languageName: "javascript",
//       languageFileName: "js"
//     },
//     {
//       languageName: "java",
//       languageFileName: "java"
//   },
//   {
//     languageName: "python",
//     languageFileName: "py"
//   },
// ];
// myCoding.forEach((item)=>{
//   // console.log(item.languageFileName)
//   // console.log(item.languageName)
// })
// // KYA HO AGAR HAM USE KARE FOR EACH LOOP KO VALUE RETURN KARANE KE LIYE 
// // const newNum = [];
// // const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// mynums.forEach((num) => {
//   if (num > 5) {
//     newNum.push(num); // Push the individual number, not the entire array
//   }
// });

// // console.log(newNum);
// // for each loop return nahi karta kuch bhi karo but agr ham chaiye to hame filter function use krna hoga ya fir if statements ka use karna hoga .





// // FILTER FUNCTION
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnum=myNums.filter((num)=>{
//   return num>5;
// })
// // console.log(newnum)
// // q- given a set of objects iside a array filter it on your own desires of filter PushSubscriptionOptions.

// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];
// // ans kala batunga dt 2/9/23











// // const newNums = myNumers.map( (num) => { return num + 10})
// // console.log(newNums);
// // chaining ;

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let myArr=[]
// const newNums= myNumers
//               .map((num)=>
//                  num*5 )
//               .map((num)=>num + 6)
//               .filter((num)=>{
//                 if(num>=40){
//                  return  myNumers.push(myArr)
//                 }
//               });
//               // console.log(newNums);





// // let myArr=[]
// // const newNums= myNumers
// //              .map((num)=>
//                 num*5 )
//              .map((num)=>num + 6)
//              .filter((num)=>{
//                if(num>=40){
//                 return  myNumers.push(myArr)
//                }
//              });
//              // console.log(newNums);

//             // ******************************REDUCE FUNCTION**************************************************************************

// // YE BHAI SAHAB KO PEHLE EK INITIAL VALUE DENA HOTA HE MAINLY 0 DE SAKTE HE THEN ARRAY KE VARIABLE KA NAME .REDUCE LAGAO TO KYA HOGA NA EK ACCUMULATOR,CUURENT VALUE PE FUCNTION CHALEGA PEHLE CASE ME BAS ACCUMULATOR INITIAL VLAUE LEGA JO KI HAMNE 0 DI HE THEN WO CURRENT VALUE ARRAY SE LEGA DONO KE UPAR THEN FUCNTION CHALAYEGA JO GIVEN HE AND BAS ISKE BAD JO BHI OUTPUT AYA USKO NEXT ACCUMULATOR ME DALKE NEXT CURRENTVLAUE KE SATH EVALUATE KARNE LAG JAYEGA AND YE TAB TAK CHALEGA JAB TAK ARRY KHATAM NA HO JAYE AND YE BHAI SAB SINGLE VLAUE RETURN KIA KARTE HE .
// const myNumBers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const myTotal = myNumBers.reduce(function(acc, currval) {
//   console.log(`acc: ${acc} and currval: ${currval}`);
//   return acc + currval;
// }, 0);

// console.log(myTotal);



