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


// use object for urls
fetch("http://localhost:3000/view-projects")
  .then((res) => res.json())
  .then((data) => {
    data.reverse().forEach((project) => {
      displayProject(projectsList, project);
    });
  });

const projectsList = document.getElementById("projectsList");

// use destructuring
const displayProject = (projectsList, projectObj) => {
  const project = document.createElement("li");
  const table = document.createElement("table");
  table.setAttribute("id", `project${projectObj.projectID}`);

// table scope
  for (const property in projectObj) {
    fillTableRow(property, table, projectObj);
  }

  project.insertAdjacentElement("beforeend", table);
  projectsList.insertAdjacentElement("beforeend", project);
};

// 
const fillTableRow = (property, table, projectObj) => {
  const row = document.createElement("tr");

  const projectProperty = document.createElement("th");
  const propertyName = document.createTextNode(property);
  projectProperty.appendChild(propertyName);

  const projectInfo = document.createElement("th");
  const propertyValue = document.createTextNode(projectObj[property]);
  projectInfo.appendChild(propertyValue);

  row.insertAdjacentElement("beforeend", projectProperty);
  row.insertAdjacentElement("beforeend", projectInfo);

  table.insertAdjacentElement("beforeend", row);
};

// const testData = {
//   name: "lindo",
//   age: 200,
//   height: 1.72,
//   weight: "65kg",
//   projectID: 69,
// };

// displayProject(projectsList, testData);
