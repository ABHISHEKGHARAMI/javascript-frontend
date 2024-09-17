let todo_list = [];

function todoFunction(){
    let todo_name = document.querySelector('.js-input').value;
    let todo_date = document.querySelector('.js-time').value;
    // appending the value as a object
    todo_list.push({todo_name,todo_date});

    // logging the list
    let innerHTML = '';
    for(let i =0 ;i < todo_list.length;i++){
        let text = `<p>${todo_list[i][0]}</p>`
        innerHTML += text;
    }
    document.querySelector('.js-inner').innerHTML = innerHTML;
}