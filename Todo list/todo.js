document.getElementById('addTaskButton').addEventListener('click', function() {
    const input = document.getElementById('taskInput');
    const taskValue = input.value.trim();
    
    if (taskValue === '') return; // Do nothing if input is empty

    // Create a new list item
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
        <span>${taskValue}</span>
        <span class="remove-task">❌</span>
    `;
    
    // Add event listener for marking task as completed
    taskItem.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
    
    // Add event listener for removing the task
    taskItem.querySelector('.remove-task').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent triggering the click event on the task item
        this.parentElement.remove();
    });
    
    // Append the new task item to the task list
    document.getElementById('taskList').appendChild(taskItem);
    
    // Clear the input field
    input.value = '';
});
