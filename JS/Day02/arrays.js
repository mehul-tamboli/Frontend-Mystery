//10 challenges of Array to tackle

//1]
//another way to decalre same array
//let teaFL = new Array("green tea","black tea","oolong tea");

let teaFlavors = ["green tea","black tea","oolong tea"];

let firstTea = teaFlavors[0];//access first teaFlavors
// console.log(firstTea);

//2]

let cities = ["London","Tokoyo","Paris","New York"];
let favoriteCity = cities[3];
// console.log(favoriteCity  + " :Hurhhh we did ittt");

//3]Array challnge
let teatypes = ["white tea","masala tea","herabl tea"
];
teatypes[1] = "Jasmine tea";
// console.log(teatypes[1]);

//4]
let citiesVisited = ["Mumbai","Sydney"];
citiesVisited.push("Berlin"); //put element at end of array

//citiesVisited[citiesaVisited.length] = "Berlin";
// console.log(citiesVisited);

//5]
let teaOrders = ["chai","iced tea","matcha","earl grey"];
//remove last element using pop-only add pop it auto remove 

let lOrder = teaOrders.pop();
// console.log(lOrder);

//6] create soft copy->any changes done in og one ,duplicate also got that change
let popularTeas = ["green tea",
    "oolong tea","chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();

// console.log(popularTeas);
// console.log(softCopyTeas);

//7]create hard copy->doesn't impact on another
let topCities = ["Berlin","Singopore","New York"];
let hardCopyCities = [...topCities];//spread opreator
topCities.pop();
// console.log(topCities);//changes reflect here
// console.log(hardCopyCities);

//8] to merge 2 array -> use concat method
let europeancities = ["paris","Rome"];
let asianCities = ["Tokoyo","Bangkok"];
let worldCities = europeancities.concat(asianCities);
// console.log(worldCities);

//9]
let teaMenu = ["masala chai","oolong tea","green tea","earl tea"];
let menuLength = teaMenu.length;
console.log(teaMenu);

// console.log(menuLength);

//10] includes->give true or false
let cityBucketlist = ["kyoto","London","Cape Town","Vancouver"];

let isLondonList =cityBucketlist.includes("London");
// console.log(isLondonList);










