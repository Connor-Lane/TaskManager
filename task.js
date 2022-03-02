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
// Variable for removing a task
let remove;


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
        // First is to empty any text out of the text variable then adding in each task on separate lines
        text = ``;
        for (i = 0; i < tasks.length; i++) {
            if (text === ``) {
                text = tasks[i];
            } else {
                text = text + "\n" + tasks[i];
            }
        }
        alert(text);
        // Getting a new task then adds it on to the end of the list of tasks
    } else if (option.toUpperCase() === `NEW`) {
        extra = prompt(`Please enter the new task:`);
        tasks.push(extra)
        alert(`\"${extra}\" has been added!`);
        // 
    } else if (option.toUpperCase() === `REMOVE`) {
        text = `Please enter a number to remove:\n`;
        for (i = 1; i <= tasks.length; i++) {
            text = text + `${i}: ${tasks[i - 1]}\n`;
        }
        remove = parseInt(prompt(text)) - 1;
        alert(`"${tasks[remove]}" has been removed`);
        tasks.splice(remove, 1);
        // Gives message to user then cuts off the loops ability to actually loop
    } else if (option.toUpperCase() === `CLOSE`) {
        alert(`Thank you for using Task Manager!`);
        runManager = false;
    } 

}