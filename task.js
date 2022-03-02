// VARIABLES

// Variable for deciding whether to close the Task Manager or not
let runManager = true;
// Variable to store what they want to do
let option;
// Array variable to hold all the different tasks
let tasks = [`Eat chicken`, `Master JavaScript`];
// This is a variable for any text that I might need to input in a non conventional way
let text = ``;
// Variable for adding a task
let extra;


// Beginning code

while (runManager) {
    option = prompt(
`TASK MANAGER

What would you like to do (Please enter one of the options below):
"TASKS" - Displays All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove a Task
"CLOSE" - Close The Task Manager`);

    if (option.toUpperCase() === `TASKS`) {
        text = ``;
        for (i = 0; i < tasks.length; i++) {
            if (text === ``) {
                text = tasks[i];
            } else {
                text = text + "\n" + tasks[i];
            }
        }
        alert(text);
    } else if (option.toUpperCase() === `NEW`) {
        extra = prompt(`Please enter the new task:`);
        tasks.push(extra)
        alert(`\"${extra}\" has been added!`);
    } else if (option.toUpperCase() === `REMOVE`) {

    } else if (option.toUpperCase() === `CLOSE`) {
        alert(`Thank you for using Task Manager!`);
        runManager = false;
    } 

}