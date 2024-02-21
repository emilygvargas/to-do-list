console.log('my code is running')


let toDoList;

let submit = document.querySelector('.Submit');

function completed(event){
  let itemDiv = event.parentNode;
  let listItem = itemDiv.querySelector("li");
  listItem.innerHTML = '<del>'+ listItem.innerHTML + '</del>';
}
function remove(event){
  let itemDiv = event.parentNode;
  itemDiv.remove();
}

function testFunc(){
  console.log("Inside testFunc");
}


function newElement(){
  const input = document.getElementById("New-Task");
  const inputValue = input.value;

  const taskName = document.createElement("li");
  taskName.innerHTML = inputValue;

  const checkmarkButton = document.createElement("button");
  checkmarkButton.className="Checkmark";
  checkmarkButton.setAttribute("onclick", "completed(this)");

  const removeButton = document.createElement("button");
  removeButton.className="Remove-Task";
  removeButton.setAttribute("onclick", "remove(this)");
  removeButton.innerHTML = "Remove";

  let div = document.createElement("div");
  div.className="To-Do-List";
  div.appendChild(checkmarkButton);
  div.appendChild(taskName);
  div.appendChild(removeButton);

  document.getElementById("To-Do-List").appendChild(div);

}