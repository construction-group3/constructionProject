const modal = document.getElementsByClassName("modal")[0];
const captureModalOverlay = document.getElementsByClassName(
  "capture-modal-overlay"
)[0];
const toggleModal = document.getElementsByClassName("capture-modal-btn");
const toggleInvoiceModal = document.getElementsByClassName("invoice-modal-btn");
const invoiceSection = document.getElementById("invoiceSection");

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

for (const btn of toggleModal) {
  btn.addEventListener("click", () => {
    if (!Array.from(projectDetailsForm.classList).includes("hide")) {
      projectDetailsForm.classList.toggle("hide");
    }

    clientDetailsForm.classList.remove("hide");
    captureModalOverlay.classList.toggle("hide");
  });
}

const addPopupModal = (toggleModal, section) => {
  for (const btn of toggleModal) {
    btn.addEventListener("click", () => {
      section.classList.toggle("hide");
    });
  }
};

addPopupModal(toggleInvoiceModal, invoiceSection);
addPopupModal(toggleProjectProgressModal, ProjectProgressSection);
addPopupModal(toggleCompanyProjectModal, CompanyProjectSection);
addPopupModal(toggleAvailableTeamModal, AvailableTeamSection);

// get the next form on modal
const projectDetailsBtn = document.getElementById("projectDetailsBtn");
const clientDetailsForm = document.getElementById("clientDetailsForm");
const projectDetailsForm = document.getElementById("projectDetailsForm");
projectDetailsBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // validate client input
  const clientFormInput = Array.from(
    document.getElementsByClassName("clientFormInput")
  );
  const isValid = clientFormInput.every((input) => {
    if (!input.checkValidity()) {
      input.reportValidity();
    }
    return input.checkValidity();
  });

  if (isValid) {
    clientDetailsForm.classList.toggle("hide");
    projectDetailsForm.classList.toggle("hide");
  }
});

// get the previous form on modal
const backToClientFormBtn = document.getElementById("backToClientFormBtn");

backToClientFormBtn.addEventListener("click", () => {
  clientDetailsForm.classList.toggle("hide");
  projectDetailsForm.classList.toggle("hide");
});

function addTableRow(user) {
  let values = Object.values(user);
  let row = document.createElement("tr");
  row.classList.add("table-row");

  for (let value of values) {
    let head = document.createElement("th");
    const newContent = document.createTextNode(`${value}`);
    // head.classList.add(`${fieldArr[index]}`);

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

const data = [
  {
    ProjectID: 1,
    FirstName: "Minnie",
    LastName: "Ncube",
    HouseType: "3 BEDROOOM",
    EstimatedDurationInMonths: 4,
    teamName: "Titans",
    ProjectLocation: "Msunduzi",
    AmountPaidInZAR: 50123,
    BalanceInZAR: 749877,
    StatusType: "COMPLETE",
  },
  {
    ProjectID: 2,
    FirstName: "Minenhle",
    LastName: "Mncube",
    HouseType: "4 BEDROOOM",
    EstimatedDurationInMonths: 5,
    teamName: "Avengers",
    ProjectLocation: "Mhlabuyalingana",
    AmountPaidInZAR: 10000,
    BalanceInZAR: 840000,
    StatusType: "IN PROGRESS",
  },
  {
    ProjectID: 3,
    FirstName: "Mlamuli",
    LastName: "Ndlovu",
    HouseType: "1 BEDROOOM",
    EstimatedDurationInMonths: 2,
    teamName: "Justice League",
    ProjectLocation: "Dubane",
    AmountPaidInZAR: 100000,
    BalanceInZAR: 550000,
    StatusType: "IN PROGRESS",
  },
  {
    ProjectID: 4,
    FirstName: "me",
    LastName: "sirname",
    HouseType: "5 BEDROOOM",
    EstimatedDurationInMonths: 6,
    teamName: "Titans",
    ProjectLocation: "my home",
    AmountPaidInZAR: 50000,
    BalanceInZAR: 950000,
    StatusType: "IN PROGRESS",
  },
];

fillTable(data)

