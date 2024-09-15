function createFunction(){
    const  title = document.getElementById('titleInput').value;
    const time = document.getElementById('timeInput').value;

    // check for the condition for the input
    if(title && time){
       // get the table body to create the table
       const tableBody = document.querySelector('#todoTable tbody');

       // create a new row
       const newRow = document.createElement('tr');

       // create the td for the title, time and delete button.
       const titleCell = document.createElement('td');
       titleCell.textContent = title;

       const timeCell = document.createElement('td');
       timeCell.textContent = time;

       const ActionCell = document.createElement('td');
       const deleteButton = document.createElement('button');
       deleteButton.textContent = 'Delete'
       deleteButton.onclick = function (){
        tableBody.removeChild(newRow);
       };
       // append the delete button for the action cell
       ActionCell.appendChild(deleteButton);

       // append the new cell for the new row
       newRow.appendChild(titleCell);
       newRow.appendChild(timeCell);
       newRow.appendChild(ActionCell);

       // add the new row for the tableBody
       tableBody.appendChild(newRow);

       // clear the input for the next time
       document.getElementById('titleInput').value = '';
       document.getElementById('timeInput').value = '';


    }else{
        alert(`Title and Time input are not given.`)
    }
}