const {nanoid} = require("nanoid")
const path = require("path");
const fs = require("fs").promises;


const contactsPath = path.join("db", "contacts.json");
// console.log(contactsPath);

// TODO: задокументувати кожну функцію

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);

    const contacts = JSON.parse(data.toString());

    console.table(contacts);
  } catch (error) {
    console.log("Something went wrong...");
    console.log(error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);

    let contacts = JSON.parse(data.toString());

    contacts = contacts.find(({ id }) => id === contactId);

    console.table(contacts);
  } catch (error) {
    console.log("Something went wrong...");
    console.log(error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);

    const contacts = JSON.parse(data.toString());

    const newContacts = contacts.filter(({ id }) => id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(newContacts));

    console.table(newContacts);
  } catch (error) {
    console.log("Something went wrong...");
    console.log(error.message);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());
      const id =nanoid();
    await fs.writeFile(
      contactsPath,
      JSON.stringify([
        ...contacts,
        { id, name, email, phone },
      ])
    );

    const newContactsData = await fs.readFile(contactsPath);
    const newContacts = JSON.parse(newContactsData.toString());
    console.table(newContacts);
  } catch (error) {
    console.log("Something went wrong...");
    console.log(error.message);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
