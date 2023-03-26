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

let samosa = document.querySelector("#samosa");
let bill = document.querySelector("#bill");
let samosa_quantity = 0;
samosa.addEventListener('keyup', function() {
  samosa_quantity = samosa.value;
  samosa_total = 10 * samosa_quantity;
  if (samosa_quantity == "") {
    bill.innerHTML = '';
  } else {
    bill.innerHTML = `<tr><td>Samosa</td><td>Tk. 10</td><td>${samosa_quantity}</td><td>10x${samosa_quantity} = ${samosa_total}</td></tr>`
  }
})

let singara = document.querySelector("#singara");
let singara_quantity = 0;


singara.addEventListener('keyup', function() {
  singara_quantity = singara.value;
  singara_total = 12 * singara_quantity;
  if (singara_quantity == "") {
    bill.innerHTML = '';
  } else {
    bill.innerHTML = `<tr><td>singara</td><td>Tk. 12</td><td>${singara_quantity}</td><td>12x${singara_quantity} = ${singara_total}</td></tr>`
  }
})