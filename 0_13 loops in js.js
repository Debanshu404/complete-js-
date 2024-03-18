//************************************ */ LOOPS IN JS *****************************************
//  FOR LOOP
for (let i = 0; i < 10; i++) {
    const element = [i];
    if (i===5){
      console.log("5 hu bhai")
    }
   
    
    // console.log("your value is",element) ye element ko function ke scope ke bahar ascess nahi kiya ja sakta 
  }
   for (let i = 0; i <= 10; i++) {
     
    //  console.log(`outer for loop ${i}`)
     const  inenrElement = i;
    for (let a = 0; a <= 10; a++) {
    //  console.log(`outer for loop ${a}`)
    const outerElement = a;
    
   }
  }
  
  let myArray = ["flash", "batman", "superman"]
  //console.log(myArray.length);
  for (let index = 0; index < myArray.length; index++) {
      const element = myArray[index];
      // console.log(element);
      
  }
  //*************************************** */ BREAK AND CONTINUE********************************************************
  // BREAK:AT THE POINT USED BREAK NOTHING WILL BE EXUTED AFTER THIS;
  // CONTINUE:IT WILL SKIP ONE LINE AFTER THIS .
  
  
    for (let index = 0; index <=20 ; index++) {
   
    if(index==5){
      // console.log(`5 detected`);
      break
    }
    // console.log(`value of i is ${index}`)
  
  }
  // ************************************************************CONTINUE************************************************
  for (let index = 0; index<=20 ; index++) {
    if (index===5){
      // console.log("5dected")
      continue
    }
    
      // console.log(`value of i is ${index}`)
    
  }
  
  // WHILE AND DO WHILE LOOP
  let index=0
  while (index <=20) {
    // console.log(`value of index is ${index}`)
    index =index+6
    
  }
  
  let myarray=["flash","superman","batman"]
  let aRr=0
  while(aRr<myarray.length){
    // console.log(`heroes are${myarray[aRr]}`)
    aRr=aRr+1
  }
  
  // do while loop EXECUTES AT LEAST ONECE THEN CHECK FOR THE CONDITION
  let scorE=100
  do{
    // console.log(`score is ${scorE}`)
    scorE ++
  } while(scorE<=196)
  