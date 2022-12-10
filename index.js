const argv = require("yargs").argv;
const { listContacts, getContactById, removeContact, addContact } = require("./contacts");

// TODO: рефакторить
function invokeAction({ action, contactId, name, email, phone }) {
  switch (action) {
    case "listContacts":
          console.table(listContacts);
      break;

    case "getContactById":
      // ... id
      break;

    case "addContact":
      // ... name email phone
      break;

    case "removeContact":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);