// document.all[10].textContent="user list";
// console.log(document.forms)

//  var headerTitle= document.getElementById("header-title");
// var header= document.getElementById("main-header");
 
//getByClassName

 
//  var listItems= document.querySelectorAll(".list-group-item")
// var list =document.getElementById("items")

//  list.style.fontFamily="bold";

// listItems.style.color="yellow";

// console.log(listItems)

// headerTitle.textContent="Website Title"
// headerTitle.innerText="user list"
// header.style.borderBottom=" solid 3px #000"
// var title= document.querySelector(".title")
// title.classList.add("title")

//getByTagName

var tagName= document.getElementsByTagName('li')
tagName[1].textContent='hello'
tagName[4].style.backgroundColor="yellow"

//querySelector
var input= document.querySelector("input")
input.value="Type Here";

var submit = document.querySelector('input[type="submit"]')
submit.value="Send"

var lastItem= document.querySelector('.list-group-item:nth-child(2)');
lastItem.style.backgroundColor = "green";



//querySelctorAll
var secondItem= document.querySelectorAll(".list-group-item");
secondItem[1].style.color = "green";

var odd = document.querySelectorAll('li:nth-child(odd)')
var even = document.querySelectorAll('li:nth-child(even)')


for(var i=0; i <odd.length;i++){
    odd[i].style.backgroundColor="lightpink"
}

for(var i=0; i <even.length;i++){
    even[i].style.backgroundColor= "yellow"

}

