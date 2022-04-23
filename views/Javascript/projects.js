// function addTableRow(user) {
//   let values = Object.values(user);
//   let table = document.createElement("table");
//   let row = document.createElement("tr");
//   row.classList.add("table-row");

//   for (let value of values) {
//     let head = document.createElement("th");
//     const newContent = document.createTextNode(`${value}`);

//     head.appendChild(newContent);
//     row.appendChild(head);
//   }
//   table.insertAdjacentElement("beforeend", row);
// }

// function fillTable(data) {
//   for (let user of data) {
//     addTableRow(user);
//   }
// }
const projectsList = document.getElementById("projectsList");
// console.log(projectsList);

// use destructuring
const displayProject = (projectsList, projectObj) => {
//   console.log(projectObj);
//   console.log(projectsList);
  const project = document.createElement("li");
  const table = document.createElement("table");
  table.setAttribute("id", `project${projectObj.projectID}`);
  for (const property in projectObj) {
    fillTableRow(property, table, projectObj);
  }

  project.insertAdjacentElement("beforeend", table);
  projectsList.insertAdjacentElement("beforeend", project);
};

const fillTableRow = (property, table, projectObj) => {
  let row = document.createElement("tr");

  let projectProperty = document.createElement("th");
  const propertyName = document.createTextNode(property);
  projectProperty.appendChild(propertyName);

  let projectInfo = document.createElement("th");
  const propertyValue = document.createTextNode(projectObj[property]);
  projectInfo.appendChild(propertyValue);

  row.insertAdjacentElement("beforeend", projectProperty);
  row.insertAdjacentElement("beforeend", projectInfo);

  table.insertAdjacentElement("beforeend", row);
};

const testData = {
  name: "lindo",
  age: 200,
  height: 1.72,
  weight: "65kg",
  projectID: 69,
};

displayProject(projectsList, testData);
