let inputField = document.getElementById("input-value");
let submitEl = document.getElementById("submit");
let outputEl = document.getElementById("output");
let error = document.querySelector(".error");

let data = [];
console.log(data);

if (localStorage.getItem("data")) {
  let result = JSON.parse(localStorage.getItem("data"));

  data = result;
  renderItems();
}

function addElement() {
  if (inputField.value.trim() === "") {
    error.style.display = "block";
  } else {
    let userInput = inputField.value;
    error.style.display = "none";

    let id = Math.random();
    data.push({ id: id, value: userInput });
    renderItems();

    inputField.value = "";
  }
}

function renderItems() {
  outputEl.innerHTML = "";
  data.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item.value;
    let deleteBtn = document.createElement("span");
    deleteBtn.innerText = "X";
    deleteBtn.classList.add("cross");

    let div = document.createElement("div");
    div.setAttribute("id", item.id);

    div.classList.add("item_container");
    div.append(li, deleteBtn);
    outputEl.append(div);

    deleteBtn.addEventListener("click", () => {
      deleteHandler(div);
    });
  });

  // Store in localStorage after rendering
  localStorage.setItem("data", JSON.stringify(data));
}

function deleteHandler(div) {
  // Delete from DOM
  const itemToDelete = document.getElementById(div.id);
  if (itemToDelete) {
    itemToDelete.remove();
  }

  // Delete from Array
  data = data.filter((item) => item.id != div.id);

  // Update back to localStorage
  localStorage.setItem("data", JSON.stringify(data));
}

function onKeyEnter(e) {
  if (e.key === "Enter") {
    addElement();
  }
}

// Events
submitEl.addEventListener("click", addElement);
inputField.addEventListener("keydown", onKeyEnter);
