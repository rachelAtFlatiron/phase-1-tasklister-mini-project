function createPriorityDropdown(){
  // create dropdown as part of form to represent priority of task
  const dropdown = document.createElement("select");
  dropdown.name = "priority";
  dropdown.id = "priority";
  //create options
  const highOption = document.createElement("option");
  highOption.innerText = "high";
  highOption.value = "high";
  const medOption = document.createElement("option");
  medOption.innerText = "med";
  medOption.value = "med";
  const lowOption = document.createElement("option");
  lowOption.innerText = "low";
  lowOption.value = "low";
  //append options to dropdown
  dropdown.append(highOption);
  dropdown.append(medOption);
  dropdown.append(lowOption);
  return dropdown
}

function createDurationInput(){
  const durationInput = document.createElement("input");
  durationInput.id = "duration";
  durationInput.name = "duration";
  durationInput.placeholder = "duration";
  return durationInput
}

//get existing nodes from page
const taskForm = document.getElementById("create-task-form");
const taskList = document.getElementById("tasks");
//update form 
taskForm.append(createPriorityDropdown())
taskForm.append(createDurationInput());

//on form submit
taskForm.addEventListener("submit", (e) => {
	e.preventDefault();

  //get values from form
	let newTask = e.target["new-task-description"].value;
	let newDuration = e.target.duration.value;
  let taskPriority = e.target.priority.value;

  //create new elements (delete button and task list item)
  let deleteButton = document.createElement("button");
	let taskLi = document.createElement("li");
  //update text values for button and li
  taskLi.textContent = `${newTask} for ${newDuration} minutes`;
	deleteButton.textContent = "Delete";
	
  //set color of task list item based on priority
	if (taskPriority === "high") {
		taskLi.style.color = "red";
	} else if (taskPriority === "med") {
		taskLi.style.color = "orange";
	} else {
		taskLi.style.color = "green";
	}
  
  //append new elements to page
	taskList.append(taskLi);
	taskLi.append(deleteButton);

  //on delete button click remove task list item
	deleteButton.addEventListener("click", (e) => {
		taskLi.remove();
	});
});
