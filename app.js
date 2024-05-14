let inputField = document.getElementById("input-value");
let submitEl = document.getElementById("submit");
let outputEl = document.getElementById("output");
let error = document.querySelector(".error");

let data = [];

function getData() {
  if (inputField.value.trim() === "") {
    error.style.display = "block";
  } else {
    let userInput = inputField.value;
    error.style.display = "none";
    outputEl.innerHTML = "";

    let id = Math.random();
    data.push({ id: id, value: userInput });

    // Looping data from array(data)
    data.map((item, key) => {
      let li = document.createElement("li");
      li.innerText = item.value;

      let btn = document.createElement("span");
      btn.innerText = "X";
      btn.classList.add("cross");

      let div = document.createElement("div");
      div.setAttribute("id", item.id);

      div.classList.add("item_container");
      div.append(li, btn);
      outputEl.append(div);

      // Event listener for delete button
      btn.addEventListener("click", (e) => {
        // e.target.parentNode.remove();
        deleteHandler(div);
      });
    });

    inputField.value = "";
  }
}

function deleteHandler(item) {
  const filter = data.filter((val) => val.id != item.id);
  data = filter;
  outputEl.innerHTML = "";

  data.map((item) => {
    let li = document.createElement("li");
    li.innerText = item.value;

    let btn = document.createElement("span");
    btn.innerText = "X";
    btn.classList.add("cross");

    let div = document.createElement("div");
    div.setAttribute("id", item.id);

    div.classList.add("item_container");
    div.append(li, btn);
    outputEl.append(div);

    // Event listener for delete button
    btn.addEventListener("click", (e) => {
      // e.target.parentNode.remove();
      deleteHandler(div);
    });
  });
}

submitEl.addEventListener("click", getData);
