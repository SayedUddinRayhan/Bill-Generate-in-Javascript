let name = document.querySelector("#name");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");

let name2 = document.querySelector("#name2");
let email2 = document.querySelector("#email2");
let mobile2 = document.querySelector("#mobile2");

name.addEventListener("keyup", function() {
  name2.innerText = name.value;
})

email.addEventListener("keyup", function() {
  email2.innerText = email.value;
})

mobile.addEventListener("keyup", function() {
  mobile2.innerText = mobile.value;
})