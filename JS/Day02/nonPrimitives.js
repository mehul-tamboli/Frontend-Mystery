

 //cnt + D - select multiwords

//object -> keyvalue: "pair"
let username = {
    firstName:"Mehul",isLoggedin:false,
};


console.log(username);
console.log(typeof username);

console.log(username.firstName);

console.log("isnew " + username.isLoggedin);


let student1 ={
    rollNo: 40,
    isPassed:true,
    div:"B"
}
console.log(student1);
console.log(typeof student1);


student1.rollNo=41;
console.log(student1);

let obj1 = {
    "big color ": "Red",
    height : 41,
    isBig : true
}
console.log(obj1['big color ']); //access for space variable using square bracket

let today = new Date(); //date is object
console.log(today.getDate);
