let csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let rows = csvData.split("\n");
let headers = rows[0].split(",");
let numColumns = headers.length;
let dataArray = [];

for (let i = 1; i < rows.length; i++) {
  if (rows[i] === "") continue;
  let cells = rows[i].split(",");
  let rowData = {};
  for (let j = 0; j < numColumns; j++) {
    rowData[headers[j].toLowerCase()] = cells[j];
  }
  dataArray.push(rowData);
}

console.log(dataArray);

dataArray.pop();
dataArray.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
dataArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(dataArray);

let totalAge = dataArray.reduce((total, obj) => total + Number(obj.age), 0);
let averageAge = totalAge / dataArray.length;

console.log("Average Age:", averageAge);
