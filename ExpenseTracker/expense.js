 const form = document.getElementById('myForm');
 const msg = document.getElementById('message')
const userlist = document.getElementById('userList')

 const amount = document.getElementById('amount')
 const description = document.getElementById('description')
const category= document.getElementById('category')
 form.addEventListener('submit',onSubmit)

 function onSubmit(e){
    e.preventDefault()
    if(amount.value =="" && description.value ==""  && category =="" ){
        msg.innerHTML=" please enter details";
        setTimeout(()=>{
            msg.remove()
        },4000)
    } else{
        const myobj ={
            amount :amount.value,
            description:description.value,
            category:category.value
            
        }
        localStorage.setItem(myobj.description,JSON.stringify(myobj))
        showUserOnScreen(myobj)
        amount.value="";
        description.value="";
        console.log(description.value)
    }

 }

 function showUserOnScreen(myobj){
    const child = `<li id="${myobj.description}">${myobj.amount}-${myobj.description}-${myobj.category}
    <button onClick='deleteItem("${myobj.description}")'> Delete</button>
    <button onClick="editItem('${myobj.amount}','${myobj.description}','${myobj.category}')">Edit</button><li>`
 
    userlist.innerHTML=userlist.innerHTML + child;

 }

 function deleteItem(description){
    localStorage.removeItem(description)
    const child = document.getElementById(description)
    console.log(child);
    userlist.removeChild(child)
 }
 function editItem(amount,description,category){
   //myobecj se value ara hai fir edit main again define
    amount.value=amount;
    description.value=description;
    category.value=category;
//button main call karte samya myobj.description use kiya then yha sirf description why?
    deleteItem(description)
 }