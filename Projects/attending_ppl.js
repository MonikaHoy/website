const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const button = document.getElementById("add-person");
const table = document.getElementById("table-input");

//call function "add attendees" when pressing button
button.addEventListener('click', function() {
    addAttendees();
})

//create a function that make object of name and email inputs and adds them to the array "attendees"
function addAttendees () {
    console.log("i'm adding!");
    const person = inputName.value;
    const email = inputEmail.value;

    if (person === "") {
        //return 
        console.log("not ok name")
    }
    
    if (email === "") {
        //return
        console.log("not ok mail")
    }

    if (person.length <= 2) {
        //return
        console.log("name length not ok")
    }

    const newAttendee = {
        name: person, 
        email: email
    }

    attendees.push(newAttendee);

    renderAttendees();
}

//create an array
let attendees = [
    {
        name: "monika",
        email: "an email"
    },
    {
        name: "good",
        email: "luck"
    },
] 

//create function that turns a single array object (name and email) into html string 
function renderAttend(person, email) {
    console.log("render attend is running");

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
    console.log("render is running");

    let theFinalHtml = "";

    for(let i = 0; i < attendees.length; i++) {

    const newPerson = attendees[i];

    const newHtml = renderAttend(newPerson.name, newPerson.email);

    theFinalHtml += newHtml;
    }

    table.innerHTML += theFinalHtml; 
};

//call function so screen is not empty when opening 
renderAttendees();


