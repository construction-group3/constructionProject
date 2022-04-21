// const modal = document.getElementsByClassName("modal")[0];
// const captureModalOverlay = document.getElementsByClassName(
//   "capture-modal-overlay"
// )[0];
// const toggleModal = document.getElementsByClassName("capture-modal-btn");
// const toggleInvoiceModal = document.getElementsByClassName("invoice-modal-btn");
// const invoiceSection = document.getElementById("invoiceSection");

const viewCompanyProjectsBtn = document.getElementById(
  "viewCompanyProjectsBtn"
);

const toggleProjectProgressModal = document.getElementsByClassName(
  "ProjectProgress-modal-btn"
);
const ProjectProgressSection = document.getElementById(
  "ProjectProgressSection"
);

const toggleCompanyProjectModal = document.getElementsByClassName(
  "CompanyProject-modal-btn"
);
const CompanyProjectSection = document.getElementById("CompanyProjectSection");

const toggleAvailableTeamModal = document.getElementsByClassName(
  "AvailableTeam-modal-btn"
);
const AvailableTeamSection = document.getElementById("AvailableTeamSection");

const toggleLoginModal = document.getElementsByClassName("Login-modal-btn");

const LoginSection = document.getElementById("LoginSection");

// for (const btn of toggleModal) {
//   btn.addEventListener("click", () => {
//     if (!Array.from(projectDetailsForm.classList).includes("hide")) {
//       projectDetailsForm.classList.toggle("hide");
//     }

//     clientDetailsForm.classList.remove("hide");
//     captureModalOverlay.classList.toggle("hide");
//   });
// }

// const addPopupModal = (toggleModal, section) => {
//   for (const btn of toggleModal) {
//     btn.addEventListener("click", () => {
//       section.classList.toggle("hide");
//       console.log(LoginSection);
//     });
//   }
// };

// addPopupModal(toggleInvoiceModal, invoiceSection);
// addPopupModal(toggleProjectProgressModal, ProjectProgressSection);
// addPopupModal(toggleCompanyProjectModal, CompanyProjectSection);
// addPopupModal(toggleAvailableTeamModal, AvailableTeamSection);
// addPopupModal(toggleLoginModal, LoginSection);

// get the next form on modal
// const projectDetailsBtn = document.getElementById("projectDetailsBtn");
// const clientDetailsForm = document.getElementById("clientDetailsForm");
// const projectDetailsForm = document.getElementById("projectDetailsForm");
// projectDetailsBtn.addEventListener("click", (e) => {
//   e.preventDefault();

// validate client input
//   const clientFormInput = Array.from(
//     document.getElementsByClassName("clientFormInput")
//   );
//   const isValid = clientFormInput.every((input) => {
//     if (!input.checkValidity()) {
//       input.reportValidity();
//     }
//     return input.checkValidity();
//   });

//   if (isValid) {
//     clientDetailsForm.classList.toggle("hide");
//     projectDetailsForm.classList.toggle("hide");
//   }
// });

// call view projects api and populate table
fetch("http://localhost:3000/view-projects")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    // console.log("data");
    fillTable(data);
  });

// remember to change
let clientID = 1;

// get invoice by client id
fetch(`http://localhost:3000/view-invoices/${clientID}`)
  .then((res) => res.json())
  .then((data) => {
    console.log("invoice data");
    // console.log(data);
    // fillTable(data);
  });

// check progress by id
let projectID = 2;
fetch(`http://localhost:3000/check-progress/${projectID}`)
  .then((res) => res.json())
  .then((data) => {
    console.log("project data");
    console.log(data);
    // fillTable(data);
  });

  const getProjectBtn = document.getElementById("getProjectBtn")
  const getProjectInput = document.getElementById("ProjectProgressID")

  getProjectBtn.addEventListener("click",()=>{
    projectID = getProjectInput.value
  })


  const fill2Dtable = (data)=>{

  }
  function addTableRow(user,table) {
    let values = Object.values(user);
    let row = document.createElement("tr");
    row.classList.add("table-row");
  
    for (let value of values) {
      let head = document.createElement("th");
      const newContent = document.createTextNode(`${value}`);
  
      head.appendChild(newContent);
      row.appendChild(head);
    }
    table.insertAdjacentElement("beforeend", row);
  }
  
  function fillTable(data) {
    for (let user of data) {
      addTableRow(user);
    }
  }
// get-project-by-status
let statusID = 2;
fetch(`http://localhost:3000/get-project-by-status/${statusID}`)
  .then((res) => res.json())
  .then((data) => {
    console.log("status data");
    console.log(data);
    // fillTable(data);
  });

// available teams
fetch(`http://localhost:3000/view-available-teams`)
  .then((res) => res.json())
  .then((data) => {
    // console.log("invoice data");
    console.log("teams", data);
    // fillTable(data);
  });

function addTableRow(user) {
  let values = Object.values(user);
  let row = document.createElement("tr");
  row.classList.add("table-row");

  for (let value of values) {
    let head = document.createElement("th");
    const newContent = document.createTextNode(`${value}`);

    head.appendChild(newContent);
    row.appendChild(head);
  }
  table.insertAdjacentElement("beforeend", row);
}

function fillTable(data) {
  for (let user of data) {
    addTableRow(user);
  }
}
function getFormData(form) {
  const FD = new FormData(form);
  const newFD = {};
  for (let key of FD.entries()) {
    newFD[key[0]] = key[1];
  }
  return newFD;
}
//
const addNewProjectForm = document.getElementById("addNewProjectForm");

addNewProjectForm.addEventListener("submit", () => {
  // e.preventDefault();
  console.log("server");

  const formData = getFormData(addNewProjectForm);
  console.log("server");
  fetch("http://localhost:3000/add-new-project-form", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.text())
    .then((data) => console.log(data));
});
