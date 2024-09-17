let todo_list = []
function todoFunction(){
  let todo_element = document.querySelector('.js-name-input').value;
  todo_list.push(todo_element);
  console.log(todo_list);
  document.querySelector('.js-name-input').value = '';
}

function todoFunc(){
    let todo_element = document.querySelector('.js-name-input2').value;
    todo_list.push(todo_element);
    let innerHTML = '';
    for(let i =0 ; i<todo_list.length;i++){
      let text = `<p>${todo_list[i]}</p>`;
      innerHTML+=text;
    }
    document.querySelector('.inner').innerHTML = innerHTML;
    document.querySelector('.js-name-input2').value = '';
}