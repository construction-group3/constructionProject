const modal = document.getElementsByClassName("modal")[0];
const modalOverlay = document.getElementsByClassName("modal-overlay")[0];
const toggleModal = document.getElementsByClassName("modal-btn");

for (const btn of toggleModal) {
  btn.addEventListener("click", () => {
    if (!Array.from(projectDetailsForm.classList).includes("hide")) {
      projectDetailsForm.classList.toggle("hide");
    }

    clientDetailsForm.classList.remove("hide");
    modalOverlay.classList.toggle("hide");
  });
}

// get the next form on modal
const projectDetailsBtn = document.getElementById("projectDetailsBtn");
const clientDetailsForm = document.getElementById("clientDetailsForm");
const projectDetailsForm = document.getElementById("projectDetailsForm");
projectDetailsBtn.addEventListener("click", () => {
  
  // validate client input
  const clientFormInput = Array.from(
    document.getElementsByClassName("clientFormInput")
  );
  const isValid = clientFormInput.some((input) => input.checkValidity());
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
