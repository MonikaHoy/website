const writeTag = document.getElementById("text");
const tagBox = document.getElementById("tag-box");
const cross = document.getElementById("cross");

writeTag.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        addTags();
    }
});

let tags = [];

function addTags () {
    const text = writeTag.value;

    if(text === "") {
        console.log("I'm empty")
    }

    const newTag = {
        input: text, 
        url: "cross.png"
    }

    tags.push(newTag);
    renderTagBox();
    clearInput();
}

function clearInput () {
    writeTag.value = "";
}

function renderTag (text,url) {
    return `<div class="input-tag" id="input-tag">
    <div class="tag">
        <span>${text}</span>
    </div>
    <div>
        <image id="cross" src="${url}" alt="cross"></image>
    </div>
</div>`;
}

function renderTagBox () {
    let finalHtml = "";

    for(let i = 0; i < tags.length; i++) {
       const tgs = tags[i];
        let tagsHtml = renderTag(tgs.input, tgs.url);

        finalHtml += tagsHtml; 
    }
    
    tagBox.innerHTML = finalHtml;

    document.getElementById("cross").addEventListener('click', function () {
        console.log("i'm being pressed:)");
    })
}

