/*
    Author: Riley Eyrich
    Date: 3/25/22
    Title: To Do List
*/


//alert("test")

//add new task
function addNewTask() {
    var li = document.createElement('li');
    var newTask = document.querySelector('input').value;
    document.getElementById("taskList").appendChild(li).innerHTML = '<button class="delete" onclick="delItem(this)"></button>' + newTask;//creates li with user input
    document.getElementById("addTask").value = "";
}

const ul = document.getElementById("taskList");
ul.addEventListener('click', mark, false);

//strikethrough text
function mark(evt) {
    evt.target.classList.toggle("done");
}

//"delete" item
function delItem(node) {
    node.parentNode.remove();
}
