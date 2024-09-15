 function saveToLocalStorage(todoList) {
            localStorage.setItem('todos', JSON.stringify(todoList));
        }

        // Function to get to-do list from localStorage
function getFromLocalStorage() {
            const todos = localStorage.getItem('todos');
            return todos ? JSON.parse(todos) : [];
        }
function createFunction(){
    const  title = document.getElementById('titleInput').value;
    const time = document.getElementById('timeInput').value;

    // check for the condition for the input
    if(title && time){
       const todoList = getFromLocalStorage();
       const newTodo = { title, time };

        // Add the new to-do to the array
       todoList.push(newTodo);

                // Save the updated list to localStorage
                saveToLocalStorage(todoList);

                // Display the updated list in the table
                displayToDos();

                // Clear input fields
                document.getElementById('titleInput').value = '';
                document.getElementById('timeInput').value = '';


    }else{
        alert(`Title and Time input are not given.`)
    }
}
// Function to display the to-do items in the table
        function displayToDos() {
            const todoList = getFromLocalStorage();
            const tableBody = document.querySelector('#todoTable tbody');
            tableBody.innerHTML = '';  // Clear the table body

            // Loop through the to-do list and create table rows
            todoList.forEach((todo, index) => {
                const newRow = document.createElement('tr');

                const titleCell = document.createElement('td');
                titleCell.textContent = todo.title;

                const timeCell = document.createElement('td');
                timeCell.textContent = todo.time;

                const actionCell = document.createElement('td');
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = function () {
                    deleteToDo(index);
                };

                actionCell.appendChild(deleteButton);

                newRow.appendChild(titleCell);
                newRow.appendChild(timeCell);
                newRow.appendChild(actionCell);

                tableBody.appendChild(newRow);
            });
        }


        // Function to delete a to-do item and update localStorage
        function deleteToDo(index) {
            const todoList = getFromLocalStorage();

            // Remove the item at the specified index
            todoList.splice(index, 1);

            // Save the updated list to localStorage
            saveToLocalStorage(todoList);

            // Refresh the display
            displayToDos();
        }

        // Load and display the to-do list when the page is loaded
        window.onload = function () {
            displayToDos();
        };