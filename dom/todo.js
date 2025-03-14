const addbtn = document.getElementById("add-btn");
const addtodo = document.getElementById("add-todo");
const todoadd = document.getElementById("todo");
addbtn.addEventListener("click", () => {
  const value = addtodo.value;
  const li = document.createElement("li");
  li.innerText = value;
  const delbutton = document.createElement("button");
  delbutton.addEventListener("click", () => {
    li.remove();
  });
  delbutton.innerHTML = "x";
  todoadd.append(li);
  li.appendChild(delbutton);
  addtodo.value = "";
});