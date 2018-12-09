const cats = require("./cats.js");
console.log(cats);
document.querySelector("body").innerHTML = JSON.stringify(cats);
