function changeName() {
  let inputName;
  let person = prompt("What is your name?", "Peter Parker");
  if (person == null || person == "") {
    inputName = "Hello";
  } else {
    inputName = "Hello " + person;
  }
  document.getElementById("inputName").innerHTML = inputName;
}
