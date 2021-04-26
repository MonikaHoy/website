const fName = document.getElementById("first-name");
const sName = document.getElementById("surname");
const email = document.getElementById("email");
const check = document.getElementById("checkbox");
const message = document.getElementById("message");
const button = document.getElementById("button");
const nameErr = document.getElementById("div-firstname").classList;
const surNameErr = document.getElementById("div-surname").classList;
const emailErr = document.getElementById("div-email").classList;
const mesErr = document.getElementById("div-message").classList;
const checkErr = document.getElementById("div-check").classList;
const newScreen = document.getElementById("ok-screen");
const form = document.getElementById("form");

function validateEmail(mail) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
    return true;
  }
  return false;
}

function validate () {
    const firstName = fName.value.trim();
    const surname = sName.value.trim();
    const mail = email.value.trim();
    let ok = true;
   
    if (firstName.length <= 2) {
        nameErr.remove("hidden");
        ok = false;
    } else {
        nameErr.add("hidden");
    }

    if (surname.length <= 2){
        surNameErr.remove("hidden");
        ok = false;
    } else {
        surNameErr.add("hidden");
    }
    
    if (message.value === "") {
        mesErr.remove("hidden");
        ok = false;
    } else {
        mesErr.add("hidden");
    }
    
    if (!check.checked) {
        checkErr.remove("hidden");
        ok = false;
    } else {
        checkErr.add("hidden");
    }

    if (!validateEmail(mail)) {
        emailErr.remove("hidden");
        ok = false;
    } else {
        emailErr.add("hidden");
    }

    if (ok) {
        form.classList.add("hidden");
        newScreen.classList.remove("hidden");

        const newHtml = `<div>
    <p class="ok-screen">Thank you ${firstName} ${surname} ❤️</p>
    </div>`;

        newScreen.innerHTML = newHtml;
        
    }
}

form.addEventListener("submit", (evt) => {
    validate()
    evt.preventDefault();
})