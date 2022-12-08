var form = document.getElementById("addForm")
var itemsList = document.getElementById("items")
var filterList = document.getElementById("filter")

form.addEventListener('submit', onEvent)
itemsList.addEventListener('click',removeItem)
filterList.addEventListener('keyup',filterItems)


function onEvent(e) {
    e.preventDefault()
 
    //get input value
    var newItem = document.getElementById('item').value;
    //create li  element
    var li = document.createElement('li')
// add class
li.className='list-group-item';
//add textnode
var addTextNode= document.createTextNode(newItem)
//append to input
li.appendChild(addTextNode)

var deleteBtn = document.createElement('button')
deleteBtn.className='btn btn-danger btn-sm float-right delete';
var addButton = document.createTextNode('X')
deleteBtn.appendChild(addButton)
//append button to li
 li.appendChild(deleteBtn)

 //append list to  list
itemsList.appendChild(li)

}

//remove function
 function removeItem(e){
    if(e.target.classList.contains('delete')){
 if (confirm('Are you sure?')){
    var li = e.target.parentElement;
    itemsList.removeChild(li)
 }
    }
 }

 // filter function
 function filterItems(e){
   var text = e.target.value.toLowerCase();
   //get list
   var items = document.getElementsByTagName('li');
//
//convert to array

Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    //  console.log(item.firstChild);
    // console.log(item.lastChild);
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display='block';
    }else{
        item.style.display='none';
    }
})


 }
