//Top 10 Loop challlenges in JS
//1]
// let tea = ["green tea","black tea","chai","oolong tea"];
// let selectedTeas = [];

// for(let i = 0; i < tea.length; i++){
//     if (tea[i] == "chai") {
//         break;
//     }selectedTeas.push(tea[i]);
// };
// console.log(selectedTeas);

//2]

// let cities = ["London","New York","Paris","Berlin"];
// let visitedCities = [];

// for (let j = 0; j < cities.length; j++){
//     if (cities[j] === "Paris" || cities[i] === "paris") {
//         continue; //skip this iteration 
//     }
//     visitedCities.push(cities[j]);
// }
// console.log(visitedCities);

//3]
let numbers = [1,2,3,4,5];
let smallNumbers = [];

for (let num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num)
}
// console.log(smallNumbers);

//4]
// let teas = ["chai","green tea","herbal tea","black tea"];

let preferredTeas = [];

// for (let pick of teas) {
//     if(pick === "herbal tea"){
//         continue;//skip herbal tea
//     }
//     preferredTeas.push(pick);
// }
// console.log(preferredTeas);

//5]
let citiesPopulation = {
    London : 8900000,
    "New York" : 8400000,
    Paris : 2200000,
    Berlin : 3500000
};

let CityNewPopulation = {};

for (const city in citiesPopulation) {
    //here city is key in citiespop.
    //key = value
    if(city == "Berlin"){
        break;
    }
    CityNewPopulation[city] = citiesPopulation[city];   
}
// console.log(CityNewPopulation);

//6]

let worldCities = {
    "Syndey" : 5000000,
    "Tokyo" : 9000000,
    "Berlin" : 35000000,
    "Paris" : 22000000
};
let largeCities = {};



for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue;
    }
    largeCities[city] = worldCities[city]; //object[key] to acces value of worldCities
    
    
}
// console.log(largeCities);

//7] for_each loop


let teaTypes = ["earl tea","green tea","chai"];
let availableTeas = [];
teaTypes.forEach(function(tea){
    if (tea === "chai") {
        return; //skip only not break this keyword
    }
    availableTeas.push(tea);
    
});
// console.log(availableTeas);

//break or continue -> only for loop specific not in function looping

//8]
let cities = ["Berlin","tokyo","Sydeny","Paris"];
let travelCities = [];

cities.forEach(city => {
    if (city === "Sydeny") {
        return; //whole fun return if cond is true
    }
    travelCities.push(city)
});
// console.log(travelCities);

//9]
let myNumber = [2,5,7,9];
let doubleNumbers = [];

for (let l = 0; l < myNumber.length; l++) {
    if (myNumber[l] == 7) {
        continue;
    }else{
       doubleNumbers.push(myNumber[l] * 2);
    };
    
};
// console.log(doubleNumbers);

//10] for_of loop

let bigTeas = ["chai","green tea","black tea","jasmine tea","herbal tea"];
let shortTeas = [];

for (let tea of bigTeas) {
    if (tea.length > 10) {
        break;
    }
    shortTeas.push(tea);
};
console.log(shortTeas);

