// to fatch the different directory data we should make a unique file index.js and reduired all the data of the file and then make the array of the value which we fatch from the directory

const apple = require("./apple");
const banana = require("./banans");
const orange = require("./orange");
let fruits = [apple,banana,orange];

module.exports = fruits;
