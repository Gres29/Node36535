const fs = require("fs");

function save(newData, file) {
  const data = fs.readFileSync(file);
  const parsedData = JSON.parse(data);
  parsedData.push(newData);
  const formattedData = JSON.stringify(parsedData);
  fs.writeFileSync(file, formattedData);
}

module.exports = {
  save,
};