let title = document.getElementById("title");
let languageInput = document.getElementById("languageInput");
let addBtn = document.getElementById("addBtn");
let message = document.getElementById("message");
let languageCount = document.getElementById("languageCount");
let languageList = document.getElementById("programming languageList");

let count = 0;

addBtn.addEventListener("click",function() {
    let languageText = languageInput.value;
    if(languageText === "") {
        message.textContent = "Please Enter Language" ;
        return;

    }
    let li = document.createElement("li");

    let languageSpan = document.createElement("span");
    languageSpan.textContent = languageText;

    let noteInput = document.createElement("input");
    noteInput.type = "text";
    noteInput.placeholder = "Add a note";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(languageSpan);
    li.appendChild(noteInput);
    li.appendChild(deleteBtn);
    LanguageList.appendChild(li);

    count++
    languageCount.textContent = count;

message.textContent = "Language added successfully";
languageInput.value = "" ;

deleteBtn.addEventListener("click",function() {
    li.remove()

    count--;
    languageCount.textContent = count;

    message.textContent = "Language deleted";
});
});