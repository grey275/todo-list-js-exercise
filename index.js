// Arrays to keep track of each task's state
// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,

    markCompleted: function () {
      this.complete = true;
    },

    // Print the state of a task to the console in a nice readable way
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

  };

  return task
}

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter",  "Take all the 💩 out of the litter box"); // task 0
const task2 = newTask("Do Laundry","😨"); // task 1

task1.logState(task1);
task1.markCompleted(); // Clean Cat Litter has not been completed
task1.logState(task1); // Clean Cat Litter has been completed

const tasks = [task1, task2];
console.log(tasks);
