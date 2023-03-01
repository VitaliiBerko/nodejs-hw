const path = require("path");
const fs = require("fs").promises;

const contactsPath = path.join("db", "contacts.json");
console.log(contactsPath);

// TODO: задокументувати кожну функцію

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);

    console.log(data);
    const contacts = JSON.parse(data.toString());
    console.log(contacts);
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

    console.log(contacts);
  } catch (error) {
    console.log("Something went wrong...");
    console.log(error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contactsPath);

    let contacts = JSON.parse(data.toString());

    contacts = contacts.filter(({ id }) => id !== contactId);
    await fs.writeFile("result.json", JSON.stringify(contacts));
    console.log(contacts);
  } catch (error) {
    console.log("Something went wrong...");
    console.log(error.message);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data.toString());

    await fs.writeFile(
      "result.json",
      JSON.stringify([...contacts, { name, email, phone }])
    );

    const resultPath = path.join("result.json");
    const resultData = await fs.readFile(resultPath);
    const result = JSON.parse(resultData.toString());

    console.log(result);
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
