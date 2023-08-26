window.addEventListener('load', () => {
	todos = JSON.parse(localStorage.getItem('todos')) || [];
	const nameInput = document.querySelector('#name');
	const newTodoForm = document.querySelector('#new-todo-form');

	const username = localStorage.getItem('username') || '';

	nameInput.value = username;

	nameInput.addEventListener('change', (e) => {
		localStorage.setItem('username', e.target.value);
	})
}) 

window.addEventListener('load', () => {
	content = JSON.parse(localStorage.getItem('content')) || [];
	const exInput = document.querySelector('#content');
	const newTodoForm = document.querySelector('#new-todo-form');

	const userinput = localStorage.getItem('userinput') || '';

	exInput.value = userinput;

	exInput.addEventListener('change', (e) => {
		localStorage.setItem('userinput', e.target.value);
	})
}) 

// localStorage.setItem('category', options.category);
// document.getElementById('category').value = localStorage.getItem("category");


var radios = document.getElementsByName("category");
var val = localStorage.getItem('category');
for(var i=0;i<radios.length;i++){
    if(radios[i].value == val){
        radios[i].checked = true;
    }
}

const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function AddTask(){
    if(inputbox.value=== ''){
      alert("You must enter something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML =  "\u00d7";
        li.appendChild(span);

    }
    inputbox.value="";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI" ){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}
 function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
 }
 showTask();
 
