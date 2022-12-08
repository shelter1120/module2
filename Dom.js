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


var itemList = document.getElementById("items")
console.log(itemList);

//parertElement
console.log(itemList.parentElement);

//lastelementchild
console.log(itemList.lastElementChild);


// lastchild
console.log(itemList.lastChild);

// createchild
// console.log(createchild);

// firstelementchild
console.log(itemList.firstElementChild);

// firstchild
//  console.log(itemList.firstChild);

//      //nextsibling
//      console.log(itemList.nextSibling);

//  console.log(itemList.nextelementsibling)

// // previoussibling
// console.log(itemList.previousSibling);

// // previouselementsibling
// console.log(itemList.previousElementSibling);

//createElement

var newDiv= document.createElement('div');

newDiv.id='hello';
newDiv.className='hello1';

newDiv.setAttribute("title",'hello div')
//text node
var textNode= document.createTextNode("HEllo word")
//add text to div
newDiv.appendChild(textNode);

//to add newDIv on Page

var container = document.querySelector('header .container')
var h1= document.querySelector('header h1')

console.log(newDiv)
 
newDiv.style.fontSize="40px";
container.insertBefore(newDiv , h1)

var newItem= document.createElement('div');

newItem.id='item';
newItem.className='item1';

newItem.setAttribute("title",'item div')
//text node
var textNode= document.createTextNode("HEllo word")
//add text to div
newItem.appendChild(textNode);


//to add newDIv on Page
// first parent id/class and where we want to insert
var container2 = document.querySelector('div #main')
var list= document.querySelector('div #items')

console.log(container2)
 
newItem.style.fontSize="40px";
container2.insertBefore(newItem , list)


