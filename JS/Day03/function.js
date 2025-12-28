// / function name(params) {}
// function greet(name){ //parameter
//     // console.log(`Hello ${name}`); 
// };
// greet("Mehul");//pass arguments


/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;//return key end function exection here
};
// let teaOrder =makeTea("Green Tea");
// console.log(teaOrder);

// console.log(makeTea("Green Tea"));

//2]
/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType} chai`;
    };
    return confirmOrder();//call function
};
let orderConfirmation = orderTea("green tea");
// console.log(orderConfirmation);


/**
fucntion greet (){};

const greet = () => {}
 */
/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/  //ARROW FUNCTION-> Not have more ability than classic function

// const calculateTotal1 = (price,quantity) => price * quantity ;


const calculateTotal = (price,quantity) => {
    return (price * quantity);
};
let totalCost = calculateTotal(100,25);
// console.log(`Price is :${totalCost}`);

/* 
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`. 
Return the result of calling `makeTea`.
*/
function makeTea(typeOfTea){
    return `maketea ${typeOfTea}`
}
function processTeaOrder(teaFunction) {
    return teaFunction('earl grey')
}

let order = processTeaOrder(makeTea);//call
// console.log(order);

/* 
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`. 
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/
function createTeaMaker(name) {
    let  score = 100;
    return function (teaType) {
        return `Making ${teaType} ${name} ${score}` //access param of parent function
    }
}
let  teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));


