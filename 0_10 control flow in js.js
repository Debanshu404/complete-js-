//***************************************** */ CONTROL FLOW IN JS*************************************************************
//IF CONDITIONAL:THE CONDITION IN THE PARENTHESIS SHOULD BE TRUE THEN THE CODE INSIDE THE SCOEPE OF IT  WILL RUN OTHERWISE THE IF STATEMENT WILL NIT WORK.
const userLoggedIn=true;
if(userLoggedIn){
  // console.log("kam kar rah ahe code 🧑")
}
// basic if else proggrame

const userLoggedin=true;
const cardLogin=true;
const loggedInFromGoogle=true;
const loggedInFromEmail=false;
   if(userLoggedIn && cardLogin){
    // console.log("swagat he apka ")
   }
   if(loggedInFromEmail || loggedInFromGoogle ){
    // console.log("you can continue to shop")
   }

//  SWITCH CASE STATEMENTS
const month="3"

switch (month) {
  case 1:
    console.log("january")
    break;
  case 2:
    console.log("february")
    break;
  case 3:
    // console.log("March")
    break;

  default:
    // console.log("default he mere bhai")
    break;
}