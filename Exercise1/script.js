function changeName() {
  let inputName;
  let person = prompt("What is your name?", "Peter Parker");
  alert("Hello " + person);
  if (person == null || person == "") {
  } else {
    inputName = "Hello " + person;
  }
  document.getElementById("inputName").innerHTML = inputName;
}
