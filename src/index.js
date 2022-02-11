//---DELIVERABLES---
//User should be able to type a task into input field
//User should be able to click some form of a submit button
//User expects to see task string that they provided 
  //appear in DOM after submit button activates

//---STRETCH DELIVERABLES--- (1 or more)
//A delete function that removes tasks from list
//A priority value selected from a dropdown that is used to determine text color in list (e.g. red for high priority, yellow for medium, green for low)
  //As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
//An additional input field (e.g. user, duration, date due)
//Ability to edit tasks
//Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM

const todoFormId = 'create-task-form';

document.addEventListener("DOMContentLoaded", () => {
  //listens to form element and if it yells submit, do a thing
  const todoForm = document.getElementById(todoFormId);
  
  todoForm.addEventListener('submit', addTodo)
});

//event handlers take one parameter, the element itself
function addTodo(e) {
  e.preventDefault();
  
  //e.target = property of an event, broadcasts the event
  const todoText = e.target.description.value; 
  const taskList = document.getElementById('tasks');

  const newTask = document.createElement('li');
  newTask.innerText = todoText;
  
  //creates deleteButton
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '[ X ]';
  newTask.append(deleteButton);
  //deleteButton must ONLY delete item its attached to
  deleteButton.addEventListener('click', e => {
    //const li = e.target.parentNode;
    //li.remove();
    newTask.remove(); //newTask also works bc it references in scope
  });

  taskList.append(newTask); //appends task

  e.target.reset(); // clears the box after submitting form
}

