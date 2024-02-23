//event listener to wait for DOM content to finish loading before executing JS
document.addEventListener("DOMContentLoaded", () => {
  //save task list as const
  //1️⃣ save needed nodes in consts (form, task list)
  const taskList = document.getElementById('tasks')
  //save form as const or save input/submit
  const form = document.getElementById('create-task-form')
  //getting input element, not entire form
  const formValue = document.getElementById('new-task-description')
  //after submitting the form
  //user needs to interact with page to submit form, therefore we need addEventListener
  //2️⃣ add event listener to form.  when user interacts with the form (specifically submit) we need to do something (see callback function)
  form.addEventListener('submit', (e) => {
    console.log(e)
    //3️⃣ prevent default behavior of 'submit' event (which is to redirect to another page)
    e.preventDefault()
    //save task description (i.e. user input)
    //4️⃣ get value needed to put on the page
    //one way to access form's value, by directly using the input element
    //let newTask = formValue.value //uses <input> not form
    //it is better to rely on the form that the user directly interacted with (e.target)...
    //e.target refers to element the user interacted with to trigger event
    //new-task-description... - is a reserved character, therefore we need to use bracket notation for this object
    let newTask = e.target["new-task-description"].value //e.target refers to entire form, specifically the one the user interacted with
    //put task in list
    //5️⃣ start building new <li> element: create element
    let newLi = document.createElement('li')
    //6️⃣ update textContent of new <li> with text from form
    newLi.textContent = newTask
    //7️⃣ add <li> to <ul> (which is saved in taskList)
    taskList.append(newLi)
  })

  document.getElementById('submit').addEventListener('click', (e) => {
    console.log(e)

    e.preventDefault()
  })
});
