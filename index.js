const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const noteField = document.querySelector(".notes")
const deleteBtn = document.querySelectorAll(".ex")
function addNote(){
    const note = document.getElementById("input");
    if(note.value === ""){
        alert("please enter a valid input")
    }else{
    const noteEl = document.createElement("div");
    const spanEl = document.createElement("span");
    noteEl.classList.add("note")
    spanEl.classList.add("ex")
    noteEl.append(note.value)
    spanEl.textContent = "x";
    noteEl.append(spanEl);
    noteField.append(noteEl)
    note.value = ""
    }
}

function deleteNote(event){
    const thisEl = event.target.parentElement;
    thisEl.remove()
    
}

addBtn.addEventListener("click", addNote)

deleteBtn.forEach(btn =>{
    btn.addEventListener("click", deleteNote)
})

function deleteAll(){
    const all = document.querySelectorAll(".note");
    all.forEach(note =>{
        note.remove()
    })
}

clearBtn.addEventListener("click", deleteAll)

noteField.addEventListener("click", function(event) {
    if (event.target.matches('.ex')) {
      deleteNote(event);
    }
  });