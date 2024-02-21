console.log('my code is running')
retrieveList();

function retrieveList(){
  if(localStorage.length < 1){
    return null;
  }
  else{
    for(let i=0; i<localStorage.length; i++){
      var retrievedItem = localStorage.getItem(localStorage.key(i));

      const taskName = document.createElement("li");
      taskName.innerHTML = retrievedItem;

      const checkmarkButton = document.createElement("button");
      checkmarkButton.className="Checkmark";
      checkmarkButton.setAttribute("onclick", "completed(this)");

      const removeButton = document.createElement("button");
      removeButton.className="Remove-Task";
      removeButton.setAttribute("onclick", "remove(this)");
      removeButton.innerHTML = "Remove";


      let newItem = document.createElement("div");
      newItem.className="To-Do-Item";
      newItem.appendChild(checkmarkButton);
      newItem.appendChild(taskName);
      newItem.appendChild(removeButton);

     document.getElementById("To-Do-List").appendChild(newItem);

    }
  }
}

let toDoList;

let submit = document.querySelector('.Submit');

function completed(event){
  let itemDiv = event.parentNode;
  let listItem = itemDiv.querySelector("li");
  listItem.innerHTML = '<del>'+ listItem.innerHTML + '</del>';

  let archiveParent = document.getElementById("Archive");
  archiveParent.appendChild(listItem);

  remove(event);
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

  let newItem = document.createElement("div");
  newItem.className="To-Do-Item";
  newItem.appendChild(checkmarkButton);
  newItem.appendChild(taskName);
  newItem.appendChild(removeButton);

  localStorage.setItem(inputValue, inputValue);
  console.log(localStorage);

  document.getElementById("To-Do-List").appendChild(newItem);
}
