var figlet = require("figlet");

// figlet("janyaro", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
figlet("Janyaro" ,(err, data)=>{
if (err) {
  console.log('Something went wrong');
  console.dir(err);
  return;
}
console.log(data);
})