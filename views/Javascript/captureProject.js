function getFormData(form) {
  const FD = new FormData(form);
  const newFD = {};
  for (let key of FD.entries()) {
    newFD[key[0]] = key[1];
  }
  return newFD;
}

const addNewProjectForm = document.getElementById("addNewProjectForm");

addNewProjectForm.addEventListener("submit", () => {
  const formData = getFormData(addNewProjectForm);

  fetch("http://localhost:3000/add-new-project-form", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.text())
    .then((data) => data);
});
fetch(`http://localhost:3000/view-available-teams`)
  .then((res) => res.json())
  .then((data) => {
    getAvalableTeams(data)
  });

const TeamID = document.getElementById("TeamID");

const getAvalableTeams = (teams) => {
teams.forEach(team => {
    const option =document.createElement('option')
    const teamName = document.createTextNode(team.TeamName)
    option.appendChild(teamName)
    option.setAttribute("value", team.TeamID)
    TeamID.insertAdjacentElement("beforeend",option)
});
};
