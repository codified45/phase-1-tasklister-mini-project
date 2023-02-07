


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('#create-task-form').addEventListener('submit', e => {
    e.preventDefault();
    buildToDo(e.target['new-task-description'].value);
  });
});

const buildToDo = (toDoItem) => {
  console.log(toDoItem);
  let p = document.createElement('p');
  p.textContent = `${toDoItem}      `;
  document.querySelector('#create-task-form').reset(); 
  document.querySelector('#tasks').appendChild(p);
  let dltBtn = document.createElement('button');
  dltBtn.addEventListener('click', handleDelete)
  dltBtn.textContent = "x";
  p.appendChild(dltBtn);
  console.log(dltBtn.innerHTML);
  console.log(dltBtn)
} 

const handleDelete = e => {
  e.target.parentNode.remove();
}



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

// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)

// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority

// An additional input field (e.g. user, duration, date due)

// Ability to edit tasks

// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM