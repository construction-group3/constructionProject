require("dotenv").config();
const sql = require("mssql");
const {sqlConfig} = require("./sqlConfig")

const getRecords = async () => {
  try {
    const pool = await sql.connect(sqlConfig);

    let result1 = await pool.request()
    .input('input_parameter', sql.Int, 3)
    .query(`select * from projects where projectID = @input_parameter`)
    console.log(result1.recordset);
  } catch (err) {
    throw err;
  }

};

getRecords();
