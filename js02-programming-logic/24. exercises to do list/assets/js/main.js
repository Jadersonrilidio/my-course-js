const inputTask = document.querySelector('.input-task');
const btnTask = document.querySelector('.btn-task');
const tasks = document.querySelector('.tasks');

function createLi () {
    const li = document.createElement('li');
    return li;
}

function createBtn (li) {
    li.innerText += '  ';
    const delBtn = document.createElement('button');
    delBtn.innerText = 'Delete';
    delBtn.setAttribute('class', 'delete');
    delBtn.setAttribute('title', 'delete this task');
    li.appendChild(delBtn);
}

function clearInput () {
    inputTask.value = '';
    inputTask.focus();
}

function createTask (textInput) {
    const li = createLi();
    li.innerText = textInput;
    createBtn(li);
    tasks.appendChild(li);
    clearInput();
    saveTasks();
}

function saveTasks () {
    const liTasks = tasks.querySelectorAll('li');
    const taskList = [];

    for (let task of liTasks) {
       let taskText = task.innerText;
       taskText = taskText.replace('Delete', '').trim();
       taskList.push(taskText);
    }
    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', tasksJSON);
}

function addSavedTasks () {
    if (!localStorage.getItem('tasks')) return; // ENHANCED CODE
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for (let task of taskList) {
        createTask(task);
    }
}
addSavedTasks();


inputTask.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        if (!inputTask.value) return;
        createTask(inputTask.value);
    }
});

btnTask.addEventListener('click', function (event) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) event.target.parentElement.remove();
    saveTasks();
});

