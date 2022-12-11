const argv = require("yargs").argv;
const { listContacts, getContactById, removeContact, addContact } = require("./contacts");

// TODO: рефакторить
async function invokeAction({ action, contactId, name, email, phone }) {
  switch (action) {
    case "list":
      const contactsList = await listContacts();
          console.table(contactsList);
      break;

    case "get":
      const oneContact = await getContactById(contactId);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await addContact({ name, email, phone });
      console.table(newContact);
      break;

    case "remove":
      const contactRemove = await removeContact();
      concole.table(contactRemove);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);