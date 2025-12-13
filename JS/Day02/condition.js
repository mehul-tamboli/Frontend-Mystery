//condition - check true or false

//Challenges-1]checking if a number is greater than another number
let num1 = 10 ;
let num2 = 20;
// if (check-comparison) {action block}

// if (num1 > num2){
// console.log("Num 1 is greater than Num2");
// }else {console.log("Nope");
// }

//2]Check if a string is equal to another string

let username = "Mehul";
let lName = "Mehul";

// if(username == lName){
//     console.log("pick another username");
// }else {
//     console.log("Not equal string");
    
// }

//3]Checking if a variable is a number or not
let score = "abc";
if (typeof score === 'number'){
    // console.log("yes,THis is a number");  
}else {
//  console.log("No,THis is not a number,bad");
}

//4]Checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady){
    // console.log("It is true value"); 
}else {
    // console.log("It is false value");
    
}

//5]Checking if an array is empty or not:

let myArray = [1];
console.log(myArray.length);

if(myArray.length === 0  ){
    console.log("Array is empty");
    
}else{
    console.log("Array is not empty");
    
}