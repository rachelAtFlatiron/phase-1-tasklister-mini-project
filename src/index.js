// get form and save in variable
let form = document.getElementById('create-task-form')

// create dropdown menu 
let options = document.createElement('select')
options.setAttribute('id', 'priority')


/*****************REUSABLE PRIORITY DROPDOWN MENU********************/
/*
    PARAMS:
    optionArray: array of strings, to make each option 
    selectDropdown: HTMLNode <select> node to append options to

    RETURN:
    none
*/
// function addOption (optionArray, selectDropdown) {
//     //iterate through array
//     optionArray.forEach((el) => {
//         let option = document.createElement('option')
//         //create option with current text
//         option.innerText = el
//         //add option to selectDropdown
//         selectDropdown.appendChild(option)
//     })
// }

// let priorityArray = ['low', 'medium', 'high']
// addOption(priorityArray, options)

//**************************CREATE PRIORITY DROPDOWN MENU********************************/

//create low option for select dropdown
loOption = document.createElement('option')
loOption.innerText = 'low'
options.appendChild(loOption)

//create medium option for select dropdown
medOption = document.createElement('option')
medOption.innerText = 'medium'
options.appendChild(medOption)

//create high option for select dropdown
hiOption = document.createElement('option')
hiOption.innerText = 'high'
options.appendChild(hiOption)

//append options dropdown to form 
form.appendChild(options)


/***************************FORM SUBMIT EVENT LISTENER************************** */

//create an event listener on the form 
form.addEventListener('submit', (e) => {
    //prevent page from redirecting/refreshing
    e.preventDefault()
    //directly grab what's in the description box OF THE FORM OF THIS EVENT
    let task = e.target['new-task-description'].value 
    let priority = e.target['priority'].value 

    if(task !== '') {
        //create a new li element
        let liTask = document.createElement('li')
        liTask.innerText = task  

        //***********************************SET TASK COLOR************************** */
        if(priority === 'low') {
            liTask.style.color = 'green'
            //for demonstration purposes only
            //use data attribute for numbers
            liTask.className = '3' 
        } else if (priority === 'medium') {
            liTask.style.color = 'orange'
            liTask.className = '2'
        } else if (priority === 'high') {
            liTask.style.color = 'red'
            liTask.className = '1'
        }

        //********************************CREATE DELETE BUTTON************************ */

        //create delete button
        let delBtn = document.createElement('button')
        delBtn.textContent = 'delete'
        liTask.appendChild(delBtn)

        //delBtn on click, delete liTask
        delBtn.addEventListener('click', () => {
            delBtn.parentNode.remove()
            // liTask.removeChild(delBtn) <- not recommended
        })

        
        //get the ul
        let taskList = document.getElementById('tasks')
        //append new element to ul
        taskList.appendChild(liTask)

        //clear input field on successful submission
        e.target['new-task-description'].value = ''
    }
})

//sort tasks by id (which is a number 1-3)
let main = document.getElementById('main-content')

let ascBtn = document.createElement('button')
ascBtn.innerText = 'low -> high'
main.prepend(ascBtn)
ascBtn.addEventListener('click', () => {
    //get all LIs and put them in an array
    tagsNames = document.querySelectorAll('li')
    console.log(tagsNames)
    //use .sort to iterate over node array and sort by id 


    /**************************TO DO***********************/
    // < 0 returns a first
    // > 0 returns b first
    console.log(Array.from(tagsNames).sort((a, b) => {
        //get the className number
        parseInt(a.className) - parseInt(b.className)
        //return the comparison
    }))

    //empty task list so we don't get duplicates
    //get sorted list of nodes on the page, append to task list 
})

let dscBtn = document.createElement('button')
dscBtn.innerText = 'high -> low'
main.prepend(dscBtn)