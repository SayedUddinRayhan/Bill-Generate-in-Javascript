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
let samosa_total = 0;
let samosaShow = "";
let singaraShow = "";
let khechuriShow = "";
let maggiShow = "";

samosa.addEventListener('keyup', function() {
  samosa_quantity = samosa.value;
  samosa_total = 10 * samosa_quantity;
  if (samosa_quantity == "") {
    samosaShow = "";
    showbill()
  } else {
    samosaShow = `<tr><td>Samosa</td><td>Tk. 10</td><td>${samosa_quantity}</td><td>10x${samosa_quantity} = ${samosa_total}</td></tr>`;
    showbill()
  }
})

let singara = document.querySelector("#singara");
let singara_quantity = 0;
let singara_total = 0;


singara.addEventListener('keyup', function() {
  singara_quantity = singara.value;
  singara_total = 12 * singara_quantity;
  if (singara_quantity == "") {
    singaraShow = "";
    showbill()
  } else {
    singaraShow = `<tr><td>singara</td><td>Tk. 12</td><td>${singara_quantity}</td><td>12x${singara_quantity} = ${singara_total}</td></tr>`;
    showbill()
  }
})

let khechuri = document.querySelector("#khechuri");
let khechuri_quantity = 0;
let khechuri_total = 0;


khechuri.addEventListener('keyup', function() {
  khechuri_quantity = khechuri.value;
  khechuri_total = 60 * khechuri_quantity;
  if (khechuri_quantity == "") {
    khechuriShow = "";
    showbill()
  } else {
    khechuriShow = `<tr><td>khechuri</td><td>Tk. 60</td><td>${khechuri_quantity}</td><td>60x${khechuri_quantity} = ${khechuri_total}</td></tr>`;
    showbill()
  }
})

let maggi = document.querySelector("#maggi");
let maggi_quantity = 0;
let maggi_total = 0;


maggi.addEventListener('keyup', function() {
  maggi_quantity = maggi.value;
  maggi_total = 50 * maggi_quantity;
  if (maggi_quantity == "") {
    maggiShow = "";
    showbill()
  } else {
    maggiShow = `<tr><td>maggi</td><td>Tk. 50</td><td>${maggi_quantity}</td><td>50x${maggi_quantity} = ${maggi_total}</td></tr>`;
    showbill()
  }
})

let amount = document.querySelector("#amount");
function showbill() {
  bill.innerHTML = samosaShow + singaraShow + khechuriShow + maggiShow;
  amount.innerText = samosa_total + singara_total + khechuri_total + maggi_total;
}