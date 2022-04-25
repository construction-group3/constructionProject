require("dotenv").config();
const sql = require("mssql");
const { sqlConfig } = require("./sqlConfig");

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
    return result1.recordset;
  } catch (err) {
    throw err;
  }
};

// -- CHECKING THE COMPLETED TEAMS
const getProjectsByStatus = async (statusID) => {
  try {
    const pool = await sql.connect(sqlConfig);

    let result1 = await pool
      .request()
      .input("input_parameter", sql.Int, statusID)
      .query(
        `SELECT ProjectID,FirstName,LastName,HouseType,EstimatedDurationInMonths,teamName, ProjectLocation,AmountPaidInZAR,BalanceInZAR,StatusType FROM StatusFilter(@input_parameter)
        `
      );
    return result1.recordset;
  } catch (err) {
    throw err;
  }
};

// SHOW AVAILABLE TEAMS
const getAvailableTeams = async () => {
  try {
    const pool = await sql.connect(sqlConfig);

    let result1 = await pool
      .request()
      .query(`SELECT TeamID,TeamName FROM AvalableTeams`);
    return result1.recordset;
  } catch (err) {
    throw err;
  }
};

// -- SHOWS ALL THE PROJECTS
const getAllProjects = async () => {
  try {
    const pool = await sql.connect(sqlConfig);

    let result1 = await pool.request().query(
      `SELECT ProjectID,FirstName,LastName,HouseType,EstimatedDurationInMonths AS durationInMonths,teamName, ProjectLocation,AmountPaidInZAR,BalanceInZAR,StatusType FROM vw_AllProjects
        `
    );
    return result1.recordset;
  } catch (err) {
    throw err;
  }
};

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
    return result1.recordset;
  } catch (err) {
    throw err;
  }
};

// ADD NEW PROJECT

const addNewProject = async (
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
) => {
  const para = [
    { name: "TitleID", type: sql.Int, value: TitleID },
    { name: "FirstName", type: sql.NVarChar(250), value: FirstName },
    { name: "LastName", type: sql.NVarChar(250), value: LastName },
    { name: "PhyicalAddress", type: sql.NVarChar(500), value: PhyicalAddress },
    {
      name: "EmailAddress",
      type: sql.NVarChar(250),
      value: EmailAddress,
    },
    { name: "PhoneNumber", type: sql.VarChar(10), value: PhoneNumber },
    { name: "TeamID", type: sql.Int, value: TeamID },
    { name: "HouseID", type: sql.Int, value: HouseID },
    {
      name: "ProjectLocation",
      type: sql.NVarChar(500),
      value: ProjectLocation,
    },
    { name: "Deposit", type: sql.Money, value: Deposit },
  ];

  let pool = await sql.connect(sqlConfig);

  const result1 = await pool.request();
  para.forEach(function (param) {
    result1.input(param.name, param.type, param.value);
  });
  return await result1.execute("sp_InsertProject");
};

addNewProject();
getAllProjects();
module.exports = {
  getAllProjects,
  addNewProject,
  getInvoice,
  getAvailableTeams,
  checkProgress,
  getProjectsByStatus,
};
