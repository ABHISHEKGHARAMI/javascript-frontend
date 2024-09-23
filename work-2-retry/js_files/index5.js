let todo_list = [];

function todoFunction(){
    let todo_name = document.querySelector('.js-input').value;
    let todo_date = document.querySelector('.js-time').value;
    // appending the value as a object

    // checking the input is empty or not
    if (todo_name == '' || todo_date == ''){
        alert("Please enter the name or date!!!")
    }
    todo_list.push({todo_name,todo_date});

    // clearing the input
    document.querySelector('.js-input').value = '';
    document.querySelector('.js-time').value = '';
    render();


}

    // logging the list

function render(){
    let innerHTML = '';
    for(let i =0 ;i < todo_list.length;i++){
        let todo = todo_list[i];
        let text = `
        <div class="todo-item">
           <span class="todo-name">${todo.todo_name} </span>
           <span class="todo-date">Due date : ${new Date(todo.todo_date).toLocaleDateString()}</span>
           <button class="delete-button" onclick="deleteTask(${i})">Delete</button>
        </div>
        `;
        innerHTML += text;
    }
    document.querySelector('.js-inner').innerHTML = innerHTML;
}


function deleteTask(index){
    todo_list.splice(index,1);
    render();
}