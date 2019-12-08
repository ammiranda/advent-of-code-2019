const readInterface = require("../../readInterface");

let total = 0;

readInterface.on("line", function(line) {
  total += Math.floor(parseInt(line, 10) / 3) - 2;
});

readInterface.on("close", function() {
  console.log(total);
});
