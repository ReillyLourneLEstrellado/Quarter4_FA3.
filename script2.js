const contacts = [];

function renderContacts() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";
  contacts.forEach(contact => {
    const li = document.createElement("li");
    li.textContent = contact;
    list.appendChild(li);
  });
}

function addContact() {
  const input = document.getElementById("nameInput");
  const name = input.value.trim();
  if (name) {
    if (contacts.length >= 7) {
      contacts.shift(); // Remove the oldest contact
    }
    contacts.push(name); // Add new contact
    input.value = "";
    renderContacts();
  }
}

function removeContact() {
  contacts.pop(); // Remove the most recent contact
  renderContacts();
}
