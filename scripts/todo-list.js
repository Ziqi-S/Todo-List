//const todoList = [];
let localTodoList = localStorage.getItem('TodoList') 
    ? JSON.parse(localStorage.getItem('TodoList')) 
    : [];

showTodo();

function addTodo(){
    const inputTodoElement = document.querySelector('.js-input-element');
    const inputDateElement = document.querySelector('.js-date-input-element');
    
    localTodoList.push({
        name: inputTodoElement.value, 
        dueDate: inputDateElement.value
    })

    inputTodoElement.value = '';

    localStorage.setItem('TodoList', JSON.stringify(localTodoList));
}


function showTodo(){
    let todoListHTML = '';

    for (let i = 0; i < localTodoList.length; i++) {
        //const name = todoList[i].name;
        //const date = todoList[i].dueDate;
        const { name, dueDate } = localTodoList[i];//Destructuring
        const html = `
                <div>${name}</div>
                
                <div>${dueDate}</div> 
                
                <button class="delete-button" onclick="
                    localTodoList.splice(${i}, 1);
                    localStorage.setItem('TodoList', JSON.stringify(localTodoList));
                    showTodo();
                ">Delete</button>
            `;//generating the HTML
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

/*
Main idea of js:
    1. Save the data
    2. Generate the HTML
    3. Make it interactive
*/
