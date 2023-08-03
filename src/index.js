//DOMCONTENTLOADED not technically necessary since the script tag is at the bottom of index.html 
document.addEventListener("DOMContentLoaded", () => {
  //1. access nodes using querySelector (#create-task-form, #tasks)
  const createTaskForm = document.querySelector('#create-task-form')
  //document.getElementById('create-task-form')

  const taskList = document.querySelector('#tasks')
  //document.getElementById('tasks')


  //2. create eventlistener for form (submit)
  createTaskForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //e.target will look through inputs solely for the form that triggered the event
    //e.target.name.value
    //e.target["reserved-symbol-name"].value
    // '-' is reserved for subtraction
    newTaskDescription = e.target["new-task-description"].value 

    //3. create nodes (li) and append to task list
    let li = document.createElement('li')
    li.textContent = newTaskDescription
    taskList.append(li)

  })

});
