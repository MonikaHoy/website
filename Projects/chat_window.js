const message = document.getElementById("message-input");
const button = document.getElementById("button");
const chat = document.getElementById("chatbox");
const scroll = document.getElementById("scrollbox");


function clearTheMessageBox(){
    message.value = "";
}

function scrollScrollBoxToBottom(){
    scrollbox.scrollTop = scrollbox.scrollHeight;
}

function addMessage () {
    // get the value from the text input 
    const text = message.value;

    // check that the value is not empty
    if (text === "") {
        return
    }   

    // create a new message object with the text
    const newMsg = {
        url: "woman_icon.jpg",
        text: text,
        name: "C. Ash"
    }
    
    // add the new message object to the messages array
    messages.push(newMsg);
    
    // call the render messages function 
    renderMessages();

    // clear the box
    clearTheMessageBox();
}

button.addEventListener('click', function() {
    addMessage();
})

message.addEventListener("keyup", function (e) {
    if (e.key === 'Enter') {
        addMessage();
    }
});

// new shit
let messages = [
    {
        url: "woman_icon.jpg",
        text: "Hello Everybody!",
        name: "Max Mustermann",
    },
    {
        url: "woman_icon.jpg",
        text: "Hello!",
        name: "Melly Mustermann",
    },
    {
]

function renderMessage(text, name, url) {
    //function that makes a message into html 
    return `<div  class="message">
        <div>
            <img src="${url}" alt="Female avatar">
        </div>
        <div class="chat-text">
            <div class="greeting">
                <span>${text}</span>
            </div>
            <div class="chat-name"><span>${name}</span></div>
        </div>
    </div>`;
}

function renderMessages () {
    // create a variable to accumulate the html    
    let theFinalHTML = "";

    // loop through all the messages
    for (let i = 0; i < messages.length; i++) {
        // get the message at the current index, i
        const msg = messages[i];

        // compose a html string from the current message object
        const html = renderMessage(msg.text, msg.name, msg.url);
        
        // add the newly generated html to the end of the accumulation variable
        theFinalHTML += html;
    }

    // set the chat innerHTML as the accumulation variable value
    chat.innerHTML = theFinalHTML;

    // scroll the mother fucker down
    scrollScrollBoxToBottom();
}

renderMessages();   