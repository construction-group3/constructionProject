const projectID = document.getElementById("projectID");
const projectIDForm = document.getElementById("projectIDForm");
projectIDForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getProjectById(projectID.value);
});

const projectStatus = document.getElementById("projectStatus");
projectStatus.addEventListener("change", () => {
  filterByStatus(projectStatus.value);
});

const urls = {
  allProjects: "http://localhost:3000/view-projects",
};

const getProjectById = (ID) => {
  const url = `http://localhost:3000/check-progress/${ID}`;
  getProjectList(url);
};

const filterByStatus = (statusID) => {
  const url =
    statusID == 0
      ? urls.allProjects
      : `http://localhost:3000/check-progress/${statusID}`;
  getProjectList(url);
};

// use object for urls
const projectsList = document.getElementById("projectsList");
const getProjectList = (url) => {
  projectsList.innerHTML = "";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data.reverse().forEach((project) => {
        displayProject(projectsList, project);
      });
    });
};

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

window.onload = getProjectList(urls.allProjects);
