require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.DB_PORT;
const sql = require("./src/connectDB")

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
const { getAllProjects, addNewProject } = require("./src/connectDB");

app.use(express.static("./views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/view-projects", (req, res) => {
  getAllProjects().then((data)=>{
      res.send(data)
  })
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
  const para = [
      { name: TitleID, type: sql.Int, value: 1 },
      { name: FirstName, type: sql.NVarChar(250), value: "me" },
      { name: LastName, type: sql.NVarChar(250), value: "sirname" },
      { name: PhyicalAddress, type: sql.NVarChar(500), value: "home" },
      {
        name: EmailAddress,
        type: sql.NVarChar(250),
        value: "mecomputer.com",
      },
      { name: PhoneNumber, type: sql.VarChar(10), value: "1234567890" },
      { name: TeamID, type: sql.Int, value: "1" },
      { name: HouseID, type: sql.Int, value: "1" },
      { name: ProjectLocation, type: sql.NVarChar(500), value: "my home" },
      { name: Deposit, type: sql.Money, value: 50000 },
    ];
  addNewProject(para)
  console.log(formData);
});

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});
