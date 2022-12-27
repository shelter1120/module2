const form = document.getElementById('myForm');
const msg = document.getElementById('message')
const userlist = document.getElementById('userList')

const amount = document.getElementById('amount')
const description = document.getElementById('description')
const category = document.getElementById('category')
form.addEventListener('submit', onSubmit)

function onSubmit(e) {
    e.preventDefault()
    if (amount.value == "" && description.value == "" && category == "") {
        msg.innerHTML = " please enter details";
        setTimeout(() => {
            msg.remove()
        }, 4000)
    } else {
        const myobj = {
            amount: amount.value,
            description: description.value,
            category: category.value

        }

        axios.post("https://crudcrud.com/api/e8cde805fc3d46639d70851f36634b38/ExpenseApp", myobj)
            .then((res) => {
                showUserOnScreen(res.data)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })

        // localStorage.setItem(myobj.description,JSON.stringify(myobj))
        // showUserOnScreen(myobj)
        amount.value = "";
        description.value = "";
        console.log(description.value)
    }

}

window.addEventListener("DOMContentLoaded", () => {
    const data = axios.get("https://crudcrud.com/api/e8cde805fc3d46639d70851f36634b38/ExpenseApp")
        .then((res) => {
            for (let i = 0; i < res.data.length; i++) {
                showUserOnScreen(res.data[i])
            }
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    console.log(data)
})


function showUserOnScreen(myobj) {
    const child = `<li id="${myobj._id}">${myobj.amount}-${myobj.description}-${myobj.category}
    <button onClick='deleteItem("${myobj._id}")'> Delete</button>
    <button onClick="editItem('${myobj.amount}','${myobj.description}','${myobj.category}','${myobj._id}')">Edit</button><li>`

    userlist.innerHTML = userlist.innerHTML + child;

}

function deleteItem(userId) {

    axios.delete(`https://crudcrud.com/api/e8cde805fc3d46639d70851f36634b38/ExpenseApp/${userId}`)
        .then((res) => {
            // userlist.remove(res)
        })
        .catch((err) => {
            console.log(err)
        })
    localStorage.removeItem(userId)
    const child = document.getElementById(userId)
    console.log(child);

    userlist.removeChild(child)

}
function editItem(price, content, choice, userId) {
    //myobecj se value ara hai fir edit main again define
    amount.value = price;
    description.value = content;
    category.value = choice;
    deleteItem(userId)
    console.log(amount, description, category)
    console.log(price, content, choice)

}
