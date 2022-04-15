const modal = document.getElementsByClassName("modal")[0];
const modalOverlay = document.getElementsByClassName("modal-overlay")[0];
const toggleModal = document.getElementsByClassName("modal-btn");

for (const btn of toggleModal) {
    console.log("hi");
  btn.addEventListener("click", () => {
    modalOverlay.classList.toggle("hide");
  });
}
