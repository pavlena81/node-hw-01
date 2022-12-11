const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, './db/contacts.json');

// TODO: задокументировать каждую функцию
async function listContacts() {
    const result = await fs.readFile(contactsPath);
    return JSON.parse(result);
}

async function getContactById(id) {
    const contactId = String(id);
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId);

    return result || null;
}

async function removeContact(id) {
    const contactId = String(id);
    const contacts = await listContacts();
    const index = contacts.findIndex(item => item.id === contactId);
    if (index === -1) {
        return null;
    }

    const [result] = contacts.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return result;
}

async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContacts = {
        ...{
            name,
            email,
            phone,
        }
    } 

    contacts.push(newContacts);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContacts; 
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}
