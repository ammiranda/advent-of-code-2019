const readline = require("readline");
const fs = require("fs");

module.exports = readline.createInterface({
  input: fs.createReadStream("./input.txt"),
  output: process.stdout,
  console: false
});
