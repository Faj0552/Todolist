let todoInput = document.querySelector(".todo-input");
let todoBtn = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let filerOtion = document.querySelector(".filer-todo");

document.addEventListener("DomContentLoaded", getLocalTodos);
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filerOtion.addEventListener("change", filterTodo);


function addTodo(event) {
  event.preventDefault();
  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  let newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  saveLocalTodos(todoInput.value);

  let completebtn = document.createElement("button");
  completebtn.innerHTML = "done";
  completebtn.classList.add("complete-btn");
  todoDiv.appendChild(completebtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("delete-btn");
  todoDiv.appendChild(deleteBtn);

  todoList.appendChild(todoDiv);
 
  if (todoInput.value !== "") {
    
    todoInput.value = "";
   
  }
  else {
    alert("Please Write something!");
  }
}

function deleteCheck(e) {
  let item = e.target;
  if (item.classList[0] === "delete-btn") {
    let todo = item.parentElement;
    todo.remove();

   removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  if (item.classList[0] === "complete-btn") {
    let todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filterTodo(e) {
  let todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        }
        else {
          todo.style.display = "none";
        }
        break;
      case "incomplete":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        }
        else {
          todo.style.display = "none";
        }
        break;
    }
    });

}
function saveLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  }
  else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function getLocalTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    let todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    let newTodo = document.createElement("li");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todo;
    todoDiv.appendChild(newTodo);

    let completebtn = document.createElement("button");
    completebtn.innerHTML = "Done";
    completebtn.classList.add("complete-btn");
    todoDiv.appendChild(completebtn);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "";
    deleteBtn.classList.add("delete-btn");
    todoDiv.appendChild(deleteBtn);

    todoList.appendChild(todoDiv);
  });
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  }
  else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let todoIndex = todos.children[0].innerText;
  todos.splice(todo.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}

