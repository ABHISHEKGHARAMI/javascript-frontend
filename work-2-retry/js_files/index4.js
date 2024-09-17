let todo_list = []
function todoFunction(){
  let todo_element = document.querySelector('.js-name-input').value;
  todo_list.push(todo_element);
  console.log(todo_list);
  
}