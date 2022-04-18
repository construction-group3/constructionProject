require("dotenv").config();
const sql = require("mssql");
const { sqlConfig } = require("./sqlConfig");

// CHECKING A PARTICULAR PROJECT USING A PROJECT ID
const getProject = async (ID) => {
  try {
    const pool = await sql.connect(sqlConfig);

    let result1 = await pool
      .request()
      .input("input_parameter", sql.Int, ID)
      .query(
        `SELECT ProjectID,ClientID,TeamID,HouseID, ProjectLocation,AmountPaidInZAR,BalanceInZAR,StatusType FROM IDFilter(@input_parameter) `
      );
    console.log(result1.recordset);
  } catch (err) {
    throw err;
  }
};

// CHECK PROGRESS USING PROJECT ID
const checkProgress = async (ID) => {
  try {
    const pool = await sql.connect(sqlConfig);

    let result1 = await pool
      .request()
      .input("input_parameter", sql.Int, ID)
      .query(
        `SELECT ProjectID,ClientID,TeamID,HouseID, ProjectLocation,AmountPaidInZAR,BalanceInZAR,StatusType FROM IDFilter(@input_parameter) `
      );
    console.log(result1.recordset);
  } catch (err) {
    throw err;
  }
};

// checkProgress(1)

// -- CHECKING THE COMPLETED TEAMS
const getCompletedProjects = async (statusID) => {
  try {
    const pool = await sql.connect(sqlConfig);

    let result1 = await pool
      .request()
      .input("input_parameter", sql.Int, statusID)
      .query(
        `SELECT ProjectID,FirstName,LastName,HouseType,EstimatedDurationInMonths,teamName, ProjectLocation,AmountPaidInZAR,BalanceInZAR,StatusType FROM StatusFilter(@input_parameter)
        `
      );
    console.log(result1.recordset);
  } catch (err) {
    throw err;
  }
};
// getCompletedProjects()

// SHOW AVAILABLE TEAMS
const getAvailableTeams = async () => {
  try {
    const pool = await sql.connect(sqlConfig);

    let result1 = await pool
      .request()
      .query(`SELECT TeamID,TeamName FROM AvalableTeams`);
    console.log(result1.recordset);
  } catch (err) {
    throw err;
  }
};
// getAvailableTeams()

// -- SHOWS ALL THE PROJECTS
const getAllProjects = async () => {
  try {
    const pool = await sql.connect(sqlConfig);

    let result1 = await pool.request().query(
      `SELECT ProjectID,FirstName,LastName,HouseType,EstimatedDurationInMonths,teamName, ProjectLocation,AmountPaidInZAR,BalanceInZAR,StatusType FROM vw_AllProjects
        `
    );
    return result1.recordset;
  } catch (err) {
    throw err;
  }
};

// getAllProjects()

// SHOWS INVOICES USING THE CLIENT ID
const getInvoice = async (clientID) => {
  try {
    const pool = await sql.connect(sqlConfig);

    let result1 = await pool
      .request()
      .input("input_parameter", sql.Int, clientID)
      .query(
        `SELECT Title,FirstName,LastName,HouseType,AmountPaidInZAR,BalanceInZAR,StatusDescr FROM udf_Invoices(@input_parameter)
        `
      );
    console.log(result1.recordset);
  } catch (err) {
    throw err;
  }
};
// getInvoice(1)

// ADD NEW PROJECT
const para = [
  { name: "TitleID", type: sql.Int, value: 1 },
  { name: "FirstName", type: sql.NVarChar(250), value: "me" },
  { name: "LastName", type: sql.NVarChar(250), value: "sirname" },
  { name: "PhyicalAddress", type: sql.NVarChar(500), value: "home" },
  {
    name: "EmailAddress",
    type: sql.NVarChar(250),
    value: "mecomputer.com",
  },
  { name: "PhoneNumber", type: sql.VarChar(10), value: "1234567890" },
  { name: "TeamID", type: sql.Int, value: "1" },
  { name: "HouseID", type: sql.Int, value: "1" },
  { name: "ProjectLocation", type: sql.NVarChar(500), value: "my home" },
  { name: "Deposit", type: sql.Money, value: 50000 },
];
const addNewProject = async (params, procedure) => {
  try {
    let pool = await sql.connect(sqlConfig);

    const result1 = await pool.request();
    params.forEach(function (param) {
      result1.input(param.name, param.type, param.value);
      console.log(result1);
    });
    return await result1.execute(procedure);
  } catch (err) {
    throw err;
  }
};

module.exports = {getAllProjects}