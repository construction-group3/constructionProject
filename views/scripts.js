const modal = document.getElementsByClassName("modal")[0];
const captureModalOverlay = document.getElementsByClassName("capture-modal-overlay")[0];
const toggleModal = document.getElementsByClassName("capture-modal-btn");
const toggleInvoiceModal = document.getElementsByClassName("invoice-modal-btn");
const invoiceSection = document.getElementById("invoiceSection")

const toggleProjectProgressModal = document.getElementsByClassName("ProjectProgress-modal-btn");
const ProjectProgressSection = document.getElementById("ProjectProgressSection")

const toggleCompanyProjectModal = document.getElementsByClassName("CompanyProject-modal-btn");
const CompanyProjectSection = document.getElementById("CompanyProjectSection")

const toggleAvailableTeamModal = document.getElementsByClassName("AvailableTeam-modal-btn");
const AvailableTeamSection = document.getElementById("AvailableTeamSection")

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

addPopupModal(toggleInvoiceModal,invoiceSection)
addPopupModal(toggleProjectProgressModal,ProjectProgressSection)
addPopupModal(toggleCompanyProjectModal,CompanyProjectSection)
addPopupModal(toggleAvailableTeamModal,AvailableTeamSection)

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