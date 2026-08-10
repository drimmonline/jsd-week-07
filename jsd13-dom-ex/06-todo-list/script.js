// DOM Exercise: To-Do List
// Work through the TODOs in order. Open index.html in a browser to test.

// TODO 1: Select the elements you'll need:
//   - the form (#todo-form)
//   - the input (#todo-input)
//   - the list (#todo-list)
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const addbtn = document.querySelector("#add-btn");
// TODO 2: Listen for the form's "submit" event. Inside the handler:
//   - call event.preventDefault() so the page doesn't reload
//   - read and trim the input's value
//   - if it's empty, do nothing (return)
//   - otherwise, create a new to-do item (see TODO 3) and clear the input
function handler(e) {
  e.preventDefault();
  const value = todoInput.value.trim();
  if (!value) return;
  addNewTodo(value);
  todoInput.value = "";
}

addbtn.addEventListener("click", (e) => {
  handler(e);
});
// TODO 3: Write a function addTodo(text) that:
//   - creates an <li>
//   - creates a <span class="todo-text"> inside it containing the text
//   - creates a <button class="delete-btn"> inside it with text "x"
//   - appends the <li> to the list
//
// Hint: use document.createElement, textContent, and append/appendChild.
function addTodo(text) {
  // 1. สร้าง <li>
  const li = document.createElement("li");

  // 2. สร้าง <span class="todo-text">
  const spanText = document.createElement("span");
  spanText.className = "todo-text";
  spanText.textContent = text;

  // TODO 5: เมื่อคลิกที่ span ให้ toggle class "completed" บน <li>
  spanText.addEventListener("click", () => {
    li.classList.toggle("completed");
  });
  deleteTodo(li);

  const editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  editBtn.classList = "edit-btn";
  editBtn.addEventListener("click", () => {
    const newValue = prompt("แก้ไขข้อความ:", spanText.textContent);
    if (newValue !== null && newValue.trim() !== "") {
      spanText.textContent = newValue.trim();
    }
  });
  // 4. นำ span และ button ใส่เข้าไปใน <li>
  li.appendChild(spanText);
  // 5. นำ <li> ใส่เข้าไปใน <ul> (todoList)
  todoList.appendChild(li);
  li.appendChild(editBtn);
}

function addNewTodo(text) {
  const li = document.createElement("li");

  // เขียน HTML โครงสร้างทีเดียว
  li.innerHTML = `
    <span class="todo-text">${text}</span>
    <button class="delete-btn">x</button>
  `;

  // เลือก element ภายใน li ออกมาผูก event
  const spanText = li.querySelector(".todo-text");
  const deleteBtn = li.querySelector(".delete-btn");

  spanText.addEventListener("click", () => li.classList.toggle("completed"));
  deleteBtn.addEventListener("click", () => li.remove());

  todoList.appendChild(li);
}
// TODO 4: When the delete button inside an <li> is clicked, remove that <li>
//from the list. (Attach this listener when you create the button in TODO 3.)
function deleteTodo(li) {
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
}
// TODO 5: When the todo-text span inside an <li> is clicked, toggle the
// "completed" class on the <li>. (Attach this listener when you create the
// span in TODO 3.)
