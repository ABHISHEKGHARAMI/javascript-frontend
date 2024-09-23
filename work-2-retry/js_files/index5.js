let todo_list = [];

function addtofunction(){
    let todo_name = document.querySelector('.js-input').value;
    let todo_date = document.querySelector('.js-date').value;

    // add to the list
    todo_list.push({todo_name,todo_date});
    render();
}

function render(){
    let innerHtml = '';
    for(let i = 0; i < todo_list.length;i++){
      let text = `<p>Task name : ${todo_list[i]['todo_name']} time : ${todo_list[i]['todo_date']}
      <button onclick="
      todo_list.splice(${i},1);
      ">Delete</button>
      </p>`;
      innerHtml += text;
    }
    document.querySelector('.js-inner').innerHTML = innerHtml;
}