//event listener - 
document.addEventListener("DOMContentLoaded", () => {
  //1. grab the form and assign to const 
  const form = document.getElementById('create-task-form');
  //document.querySelector('#create-task-form');
  //document.querySelector('form');
  
  //addEventListeners - take 1. the event 2. a callback function to run when event is triggered
  form.addEventListener('submit', function(e){
    //code 
    e.preventDefault();
    
    //let newTaskName = 'new-task-description';
    //let val = e.target[newTaskName].value

    //get the value use - input's 'name' 
    let val = e.target['new-task-description'].value
    
    //only add new task if string is NOT empty
    if(val !== '') {
      /*
      //put things in the DOM
      //1. createElement
      //2. put something in the element we create
      //3. append the element to something that already exists
          //1. get the element that already exists
          //2. append new node to said element
      */
      let newTaskNode = document.createElement('li');
      newTaskNode.textContent = val;

      let taskList = document.querySelector('#tasks');
      taskList.appendChild(newTaskNode); 

      form.reset();

      //create delete button 
      let deleteNode = document.createElement('button');
      deleteNode.textContent = 'delete';
      newTaskNode.append(deleteNode);

      deleteNode.addEventListener('click', function(e) {
        //actual removing of list element
        //taskList.removeChild(newTaskNode);
        newTaskNode.remove();
      })
    }   
  })
});
