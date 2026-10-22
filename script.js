let notes = JSON.parse(localStorage.getItem("notes")) || [],
  edit = -1;
function showNotes() {
  document.getElementById("notes").innerHTML =
    notes
      .map(
        (n, i) =>
          `<div class="note-card"><p></p><button class="btn btn-warning btn-sm"
         onclick="edit=${i};note.value=notes[edit];save.innerText='Update Note'">Edit</button> <button class="btn btn-danger btn-sm"
          onclick="notes.splice(${i},1);localStorage.setItem('notes',JSON.stringify(notes));showNotes()">Delete</button></div>`,
      )
      .join("") ||
    '<p class="text-secondary">No notes yet. Write your first one!</p>';
  notes.forEach(
    (n, i) => (document.querySelectorAll(".note-card p")[i].textContent = n),
  );
}
function saveNote() {
    let n = note.value.trim();
    message.innerText = n ? "" : "kuch likhh..........";

    if (n) {
        edit < 0 ? notes.push(n) : notes[edit] = n;
        localStorage.setItem("notes", JSON.stringify(notes));
        note.value = "";
        edit = -1;
        save.innerText = "+ Save Note";
        showNotes();
    }
}

showNotes();
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") saveNote();
});