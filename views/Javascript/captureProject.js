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
  