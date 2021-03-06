require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.DB_PORT;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
const {
  getAllProjects,
  addNewProject,
  getInvoice,
  getProjectsByStatus,
  checkProgress,
  getAvailableTeams,
} = require("./src/connectDB");

app.use(express.static("./views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/view-projects", (req, res) => {
  getAllProjects().then((data) => {
    res.send(data);
  });
});

app.get("/view-invoices/:id", (req, res) => {
  const ID = req.params.id;
  getInvoice(ID).then((data) => {
    res.send(data);
  });
});

app.get("/get-project-by-status/:id", (req, res) => {
  const ID = req.params.id;
  getProjectsByStatus(ID).then((data) => {
    res.send(data);
  });
});

app.get("/view-available-teams", (req, res) => {
  getAvailableTeams().then((data) => {
    res.send(data);
  });
});

app.get("/check-progress/:id", (req, res) => {
  const ID = req.params.id;

  checkProgress(ID).then((data) => {
    res.send(data);
  });
});

app.post("/add-new-project-form", (req, res) => {
  const {
    TitleID,
    FirstName,
    LastName,
    PhoneNumber,
    EmailAddress,
    PhyicalAddress,
    TeamID,
    HouseID,
    ProjectLocation,
    Deposit,
  } = req.body;

  addNewProject(
    TitleID,
    FirstName,
    LastName,
    PhoneNumber,
    EmailAddress,
    PhyicalAddress,
    TeamID,
    HouseID,
    ProjectLocation,
    Deposit
  );
});

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
