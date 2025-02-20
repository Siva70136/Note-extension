// async function sayHello() {
//   let [tab] = await chrome.tabs.query({ active: true });
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     func: () => {
//       alert("change the color of the tab"); 
//     }
//   });
// }
// document.getElementById("toggle-theme").addEventListener("click", sayHello);

document.addEventListener("DOMContentLoaded", function () {
  const noteInput = document.getElementById("noteInput");
  const saveBtn = document.getElementById("saveBtn");
  const notesList = document.getElementById("notesList");

  // Load saved notes
  function loadNotes() {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      notesList.innerHTML = "";
      notes.forEach((note, index) => {
          const li = document.createElement("li");
          li.textContent = note;
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "❌";
          deleteBtn.classList.add("delete-btn");
          deleteBtn.onclick = () => deleteNote(index);
          li.appendChild(deleteBtn);
          notesList.appendChild(li);
      });
  }

  // Save note
  saveBtn.addEventListener("click", function () {
      const note = noteInput.value.trim();
      if (note) {
          const notes = JSON.parse(localStorage.getItem("notes")) || [];
          notes.push(note);
          localStorage.setItem("notes", JSON.stringify(notes));
          noteInput.value = "";
          loadNotes();
      }
  });

  // Delete note
  function deleteNote(index) {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      loadNotes();
  }

  loadNotes(); // Load notes on startup
});
