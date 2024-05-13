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
    outputEl.innerHTML = ""; // Clear existing tasks

    data.push(userInput);

    // Looping data from array(data)
    data.map((item, key) => {
      let li = document.createElement("li");
      li.innerText = item;
      
      let btn = document.createElement("span");
      btn.innerText = "X";
      btn.classList.add("cross");
      
      let div = document.createElement("div");
      div.classList.add("item_container");
      div.append(li, btn);
      outputEl.append(div);

      // Event listener for delete button
      btn.addEventListener("click", (e) => {
        e.target.parentNode.remove();
        // Remove item from data array
        data.splice(key, -1);
      });
    });

    inputField.value = "";
  }
}

function deleteHandler(){
  
}


submitEl.addEventListener("click", getData);
