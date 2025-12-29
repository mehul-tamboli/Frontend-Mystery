// console.log("Hello from Script");

//example 1
// # Id
// . class

document.
getElementById('changeTextButton').addEventListener('click', funtion () {
    let paragraph = document.getElementById("myparagraph");
    paragraph.textContent = "the paragraph is changed";
    
} );


//2]
document.getElementById("HightlightfirstCity").
addEventListener('click', function(){
    let citiesList = document.getElementById("cititsList");
    citiesList.firstElementChild.classList.add("hightLight")
});

//3]
document.getElementById("changeorder").addEventListener('click',function (){
    let coffeeType =document.getElementById("coffeeType");
    coffeeType.textContent = "Espresso";
    coffeeType.style.backgroundColor = "Brown";
    coffeeType.style.padding = "5px";
});

//4
document.getElementById("addNewItem").addEventListener('click',function (){
    let newItem = document.createElement('li');
    newItem.textContent = "Eggs";//creation of new element (node)
    document.getElementById("shoppingList").appendChild(newItem);
});

//5 Removing DOM elements

document.getElementById("RemoveLastTask").addEventListener('click',function (){
    let taskList = document.getElementById("laskList");
    taskList.lastElementChild.remove();
});

//6 event handling

document.
getElementById("clickButton").addEventListener('click',function (){
     
})
