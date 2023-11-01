const { Pool } = require('pg') //pool for PG

const {dbConfig} = require('../config/dbConfig');

 //pool for pg admin, passed to all database functions
const pool = new Pool(dbConfig);

const registerUser = async (type) => {
    try {
      const client = await pool.connect();
      const registerUserQuery =
        "SELECT * FROM tours_data.tour_data WHERE tour_type=$1";
      let result = await client.query(registerUserQuery, [type]);
      client.release();
      return result.rows;
    } catch (err) {
      throw err;
    }
}
exports.registerUser = registerUser;