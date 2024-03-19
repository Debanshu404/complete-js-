
// ************************************************************** ARRAYS IN JAVA SCRIPT******************************************************

// WHAT IS AN ARRAY: "Arrays are generally described as "list-like objects"; they are basically single objects that contain multiple values stored in a list."


// 1- CREATING AN ARRAY!
const grocery = ["fish", "bread", "milk", "chips", "rice", "fruits", "curds"]
// console.log(grocery)

// methods of array


// 1-to find the length of any array
const cart = ["fish", "bread", "milk", "chips", "rice", "fruits", "curds", "batteries", "chips"];
//  console.log(cart.length);
// 2-modifying and updating arrays.
const amazon = ["fish", "bread", "milk", "chips", "rice", "fruits", "curds"];
// console.log(amazon[2]); indexing of an array.
// *You can also modify an item in an array by giving a single array item a new value.
const flipcart = ["fish", "bread", "milk", "chips", "rice", "fruits", "curds", "biscuits"];
flipcart[0] = "ati uttam fruits";
// console.log(amazon)
// * an array is called a multidimensional array 
// You can access an item inside an array that is itself inside another array by chaining two sets of square brackets together.
const deodap = ["fish", "bread", "milk", "chips", "rice", "fruits", "curds", "biscuits", "ac", ["smartphones", "tablets", "smartwatches", "earphones"]];
const Random = deodap[9][0];
// console.log(Random);
// **If you don't know the index of an item, you can use the indexOf() method. The indexOf() method takes an item as an argument and will either return the item's index or -1 if the item is not in the array:

// console.log(deodap.indexOf("bread"));
// console.log(deodap.indexOf("smartphones"));
// console.log(deodap.indexOf("milk"));
// console.log(deodap.indexOf("curds"));
// console.log(deodap.indexOf("fish"));


// Adding items
// To add one or more items to the end of an array we can use push(). Note that you need to include one or more items that you want to add to the end of your array.

let places = ["cuttack", "paradweep", "puri"];
let newplaces = places.push("athagadh", "salipur");
// console.log(newplaces)
// **To add an item to the start of the array, use unshift():
let cities = ["cuttack", "paradweep", "puri", "freefire"];

let placesVar = cities.unshift("konark")
// console.log(cities)
//  console.log(placesVar) , it will print 5 because that's the return value of unshift(), indicating the new length of the array after adding "konark" to the beginning.
// ***To remove the last item from the array, use pop().
let array = ["cuttack", "paradweep", "puri", "freefire"];
let popElement = array.pop();
// console.log(array)
// ***************************************// To remove the first item from an array, use shift():
let shiftElement = array.shift();
// console.log(array)

////////////////////////////////////If you know the index of an item, you can remove it from the array using splice():////////////////////////////////////////////////////////
const vscode = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
let vscodeSplice = vscode.splice(vscode, 3);
// console.log(vscode) the number in splice represents the number of elements to be removed.'
// we can also check the availability of an element inside an array by includes
let vsIncludes = vscode.includes("Carlisle")
// console.log(vsIncludes) it will return in booleans.
// Q- DIFFERENTIATE BETWEEN SPLICE AND SLICE/

// SLICE=IT WILL MAKE A SAHLLOW COPY OF THE ORIGINAL ARRAY WITH A START AND END VALUE.IT WILL NOT MODIFY THE ORIGINAL ARRYA.
// Usage: array.slice(start, end)
// SPLICE=it  is used to change the contents of an array by removing, replacing, or adding elements at a specified position.
// Usage: array.splice(start, deleteCount, item1, item2, ...)   ITEM1 AND ITEM2 IS OPTIONAL THE ELEMNTS WHICH WILL BE ADD TO THE FIRST indexed
// An array containing the removed elements. If no elements are removed, an empty array is returned.
// CONCULSION TO THE QUESTION/

// slice() is used for creating a new array by extracting a portion of an existing array without modifying the original, while splice() is used for modifying an array by removing and/or adding elements at a specific position in the original array.

//************************************ */ Converting between strings and arrays**********************
// we can use the split() method. In its simplest form, this takes a single parameter, the character you want to separate the string at, and returns the substrings between the separator as items in an array.
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
let dataSplit = data.split(",");
//  console.log(data);
//  console.log(data.length -3)

//  join*****
const vscodE = ["Manchester", "Liverpool", "Edinburgh", "Carlisle"];
let joinop = vscodE.join("-");
// console.log(joinop) it will not modify the original array.

//**************************** */ Another way of converting an array to a string is to use the toString() method. toString() is arguably simpler than join() as it doesn't take a parameter, but more limiting. With join() you can specify different separators, whereas toString() always uses a comma
const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
const dogo = dogNames.toString();
// console.log(dogo);
// console.log(typeof(dogo));
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
let allHeroes = marvel_heros.concat(dc_heros)
// let allHeroes=marvel_heros+dc_heros; this will not add these two arrays inside an array 
//  console.log(allHeroes)
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);anathor way of doing the above one using (spread operator) ie ()...)
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity) simply converts the nested array into a simple form of array and using infinity will count for the last element insid ethe array.
// console.log(real_another_array);
// ***********MAP*************
// IT CREATES A NEW ARRAY BY EPERFORMING SOME OPERATIONS ON EACH ARRAY ELEMENT

let arr = [26, 39, 69, 2, 6, 5, 4, 9, 8, 7, 35, 98, 64, 78, 42, 102]
let Arr = arr.map((num) => num * num);
//  console.log(Arr) map ko function run karao and agar usse operation karoge to booleans me ans milenge

// Array filter method
let arr2 = [26, 39, 69, 2, 6, 5, 4, 9, 8, 7, 35, 98, 64, 78, 42, 102]
let Arr2 = arr2.filter((a) => {
  return a >= 29;
}
)
// console.log(Arr2)  ye actual operation perform karne ke liye use hota he 
const mySym = Symbol("key1")

const officeUser = {
  name: "debanshu",
  age: 26,
  [mySym]: "mykey1",
  email: "debanshupati12345@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["monday", "saturday"],
}

// console.log(officeUser[mySym])
// console.log(typeof[mySym])
// console.log(officeUser.email)
// // console.log(officeUser["email"])
// officeUser.email="debanshupati394@gmail.com"
// Object.freeze(officeUser);
// // console.log(officeUser["email"])


officeUser.greeting = function () {
  console.log("heelo sir")

}
officeUser.greetingtwo = function () {
  console.log(`hello user ${this.name}`)
}
console.log(officeUser.greeting());
console.log(officeUser.greetingtwo());
console.log("here is your data", officeUser)
// singleton creation of object
// const facebook= new Object(); singleton object
// cosnt facebook={} non singleton object
// const facebook= new Object();
//  facebook.Id="2651abc"
//  facebook.name="slayer"
//  facebook.isLoggedIn=false;
//  console.log(facebook)
const regularUser = {
  email: "debu@gmail.com",
  fullname: {
    username: {
      firstname: "debanshu",
      lastname: "pati"
    }
  }
}
// console.log(regularUser.fullname.userfullname?.firstname); here we can asceess nested objects through these way using. and the (?)represents optional chaining it prevents to use if else stateents
// to print 2 or more objects like we did in arrays we will use assign
 const obj1={1:"a",2:"b",3:"c"}
 const obj2={4:"d",5:"e",6:"f"}
 const obj3={7:"g",8:"h",9:"i"}
//  let obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4) it is a bit hard way to do 
const obj4={...obj1,...obj2,...obj3}
// console.log(obj4) like array we ahve used spread operator to concat the objects.
// we can take keys and values of an object
// console.log(Object.keys(officeUser))
// console.log(Object.vlaues(officeUser))
// console.log(Object.entries(officeUser))
// console.log(officeUser,hasOwnProperty("name"))
// destructuring of objects
const course={
    coursename:"resolve decode",
    price:"999",
    courseTeacher:"Debanshu"
}
// course.courseTeacher isko zyada ham use nahi karenge
const {courseTeacher:Teacher}=course 
// console.log(Teacher);
// jason api tal ks
