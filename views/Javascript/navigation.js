const navButtons = Array.from(
  document.getElementsByClassName("material-symbols-outlined")
);
const navList = document.getElementsByClassName("navigationList")[0];

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    navList.classList.toggle("toggle");
  });
});
