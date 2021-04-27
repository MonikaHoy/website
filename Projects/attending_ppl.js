const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const addPerson = document.getElementById("add-button");
const table = document.getElementById("table-input");

//call function "add attendees" when pressing button
addPerson.addEventListener('click', function() {
    addAttendees();
    clear();
})

//clear inputs after entering
function clear () {
    inputName.value = "";
    inputEmail.value = "";
}

inputEmail.addEventListener("keyup", function (e) {
    if (e.key === 'Enter') {
        addAttendees();
        clear();
    }
});

//create a function that make object of name and email inputs and adds them to the array "attendees"
function addAttendees () {
    const person = inputName.value;
    const email = inputEmail.value;

    if (person === "") {
        return 
    }
    
    if (email === "") {
        return
    }

    if (person.length <= 2) {
        return
    }

    const newAttendee = {
        name: person, 
        email: email
    }

    attendees.push(newAttendee);

    renderAttendees();
}

//create an array
let attendees = [] 

//create function that turns a single array object (name and email) into html string 
function renderAttend(person, email) {
    return `<tr>
    <td>
        <input type="text" value="${person}"/>
    </td>
    <td>
        <input type="text" value="${email}"/>
    </td>`; 	
}

//create function that renders all attendees to html string
function renderAttendees () {
    let theFinalHtml = "";

    for(let i = 0; i < attendees.length; i++) {

    const newPerson = attendees[i];

    const newHtml = renderAttend(newPerson.name, newPerson.email);

    theFinalHtml += newHtml;
    }

    table.innerHTML = theFinalHtml; 
};

//call function so screen is not empty when opening 
renderAttendees();


