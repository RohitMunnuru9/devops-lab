
let form = document.getElementById("form");
let list = document.getElementById("list");

form.onsubmit = function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let dept = document.getElementById("dept").value;

  let row = list.insertRow();

  row.insertCell(0).textContent = name;
  row.insertCell(1).textContent = roll;
  row.insertCell(2).textContent = dept;

  let btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.onclick = function() {
    row.remove();
  };
  row.insertCell(3).appendChild(btn);

  form.reset();
};
