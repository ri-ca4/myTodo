/*
    author: Riley
    date: 3/24/22
    title: ToDoList
*/

//prompt("test");

//make array
const tasks = [];

//add input to the array with unique id and add to list
function addNewTask() {

    //creates variable from user input
    var newTask = document.querySelector('input').value;

    //creates variable for id using date and time
    var taskID ='id' + (new Date()).getTime(); 

    //adds the unique id and user input into a 2 dimensional array
    tasks.push([taskID, newTask]);

    //creates list items with unique id and user input
    document.getElementById("taskList").innerHTML = tasks.map(i => `<li id="${i[0]}" onclick="crossOut()"><button class="delete" onclick="removeTask()"></button>${i[1]}</li>`);

}



function crossOut() {
    classList.toggle("done");
}



/*
    var element = document.getElementById("id");
        element.id = taskID;
var element = document.getElementsByTagName("div")[0];
var id = element.id
*/

