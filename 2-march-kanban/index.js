const addtask = document.getElementById('Add-task-btn');

const todoBoard = document.getElementById('todo-board');

const allBoards = document.querySelectorAll('.board');

addtask.addEventListener('click',()=>{
              const input = prompt('Enter the Todo');
              if(!input) return;
              const taskCard = document.createElement('p');
              taskCard.classList.add('item')
              taskCard.setAttribute('draggable',true);
              taskCard.innerText = input;
              todoBoard.appendChild(taskCard);
               
})

allBoards.forEach((boards)=>{
               boards.addEventListener('dragover',()=>{
                       console.log(`kuch toh upr sah gya `)
               })
})