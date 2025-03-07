let sum = (a,b) => a+b;
let multi = (a,b) => a*b;
const g = 9.8;

// to send the single value into other file we use module.export
// module.exports = "hello";
// to export the multiple value we should make a object of these value and then send this object


// Export the values
module.exports = {
    sum: sum,
    multi: multi,
    g: g
};