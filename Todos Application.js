let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];
let todoItemsContainerEl = document.getElementById("todoItemsContainer");


function createAndTodoItem(todo) {

    let todoElemnt = document.createElement("li");
    todoElemnt.classList.add("todo-items-container");
    todoItemsContainerEl.appendChild(todoElemnt);

    let inputEl = document.createElement("input");
    inputEl.type = "checkbox";
    inputEl.id = "checkboxInput";
    inputEl.classList.add("checkbox-input");
    todoElemnt.appendChild(inputEl);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container");
    todoElemnt.appendChild(labelContainer);

    let labelEl = document.createElement("label");
    labelEl.setAttribute("for", "checkboxInput");
    labelEl.classList.add("checkbox-label");
    labelEl.textContent = todo.text;
    labelContainer.appendChild(labelEl);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);


}

for (let todo of todoList) {
    createAndTodoItem(todo);
}