// const Calc = require('calc-js').Calc;

// // console.log(process.argv);

// const [, , a, b] = process.argv
// console.log(new Calc(parseInt(a)).sum(parseInt(b)).finish());

// console.log('hello');

const contacts = require('./contacts')
const {listContacts, getContactById, removeContact, addContact}= contacts;

// listContacts();
// getContactById('2');
// removeContact('1');
addContact('Vova', 'bob@mail.com', '123')