


document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#create-task-form').addEventListener('submit', e => {
    e.preventDefault();   // in this case, only needed for the form because the submit would auto-refresh the page due to how forms used to work. 
    buildToDo(e.target['new-task-description'].value, e.target['estimated_time'].value);
  });

  document.getElementById('prioritize_button').addEventListener('click', prioritize);
});

// const toDoArray = [];  // bad idea since it doesn't update with the DOM. Grabbing an HTML collection with getElementsByClassName() does.

const buildToDo = (toDoItem, toDoTime) => {
  if (toDoTime > 180) {
    alert('Breaking tasks into smaller elements that take less time has shown to help make tasks less daunting and promote completion. Please try dividing the bigger task into smaller elements.');
    return;}
  let p = document.createElement('p');
  p.textContent = `     ${toDoItem}, ${toDoTime} minutes     `;
  let taskColor = document.querySelector('#new_task_priority').value;
  p.style.color = taskColor;
  p.classList.add(taskColor, "userAddedItem");
  p.contentEditable = true;

  document.querySelector('#create-task-form').reset(); 
  
  document.querySelector('#tasks').appendChild(p);
  let dltBtn = document.createElement('button');
  dltBtn.addEventListener('click', handleDelete);
  dltBtn.textContent = "x";
  dltBtn.contentEditable = false;
  p.appendChild(dltBtn);

  let boostBtn = document.createElement('button');
  boostBtn.addEventListener('click', handleBoost);
  boostBtn.textContent = "Boost";
  boostBtn.contentEditable = false;
  p.prepend(boostBtn);
}


const handleDelete = e => {
  e.target.parentNode.remove();
}


const handleBoost = e => {
  let priorityColor = e.target.parentNode.style.color;
  if (priorityColor === "green") {e.target.parentNode.style.color = "yellow"}
  if (priorityColor === "yellow") {e.target.parentNode.style.color = "red"}
};  


const prioritize = () => {
  console.log('clicked');
  console.log(document.getElementsByClassName('userAddedItem'));
  let allUserTasks = document.getElementsByClassName('userAddedItem')
  
  for (const task of allUserTasks) {  
    if (task.style.color === "red") {task.style.order = 1}; // default style.order === 0, so red does not need to be adjusted. I adjusted anyway since unprioritized tasks will have the default behavior of populating the top of the list. Otherwise they would be added under the existing "0" values.  
    if (task.style.color === "yellow") {task.style.order = 2};  
    if (task.style.color === "green") {task.style.order = 3}; // definition of flexible items? == All child elements of a flex container. 
  }

// below is how you can make this work by converting the HTML collection into an array and using .sort():

  // let userTaskArray = [...allUserTasks];
  // console.log(userTaskArray);
  
  // // sort by ascending flex order value
  // const compareOrder = (a, b) => {
  //   return a.style.order - b.style.order;
  // }

  // userTaskArray.sort(compareOrder);

  // // redraw elements in DOM
  // const taskList = document.getElementById('tasks');
  // taskList.replaceChildren(...userTaskArray);
};



// Deliverables:

// suppress default action of form (auto refresh of page) == Event.preventDefault()
// done:
  // e.preventDefault();


// As a user, I should be able to type a task into the input field.
// done:
  // <input type="text" id="new-task-description" name="new-task-description" placeholder="description">


// As a user, I should be able to click some form of a submit button.
// done: 
  // <input type="submit" value="Create New Task">
  // addEventListener('submit', e => {...} )


// As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.
// done:
  // document.querySelector('#tasks').appendChild(p);



// ** Stretch Deliverables:

// A delete function that will remove tasks from your list
// done:
  // dltBtn.addEventListener('click', handleDelete)
  // const handleDelete = e => {e.target.parentNode.remove()}


// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
//done:
  // let taskColor = document.querySelector('#new_task_priority').value;
  // p.style.color = taskColor;


// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// done:
  // const compareOrder = (a, b) => {
  //   return a.style.order - b.style.order;
  // }
  // OR:
  // for (const task of allUserTasks) {  
  //   if (task.style.color === "red") {task.style.order = 1};
  //   if (task.style.color === "yellow") {task.style.order = 2};
  //   if (task.style.color === "green") {task.style.order = 3};
  // }


// An additional input field (e.g. user, duration, date due)
// done:

  // HTML:
  // <label for="estimated_time">Estimated time required to complete:</label>
  // <input type="text" id="estimated_time" name="estimated_time" placeholder="time in minutes">

  // Javascript:
  // if (toDoTime > 180) {
  //     alert('Breaking tasks into smaller elements that take less time has shown to help make tasks less daunting and promote completion. Please try dividing the bigger task into smaller elements.');
  //     return;}


// Ability to edit tasks
// done:
  // p.contentEditable = true;


// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
// done:
  // Boost priority button. Changes task color. Then, order value is reassigned the next time Prioritize! button is clicked.  
  
  // const handleBoost = e => {
    //   let priorityColor = e.target.parentNode.style.color;
    //   if (priorityColor === "green") {e.target.parentNode.style.color = "yellow"}
    //   if (priorityColor === "yellow") {e.target.parentNode.style.color = "red"}
    // };  