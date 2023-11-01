/**
 * service class for tour related operation
 */

const { Pool } = require('pg') //pool for PG

const {dbConfig} = require('../config/dbConfig');

 //pool for pg admin, passed to all database functions
const pool = new Pool(dbConfig);

const getToursByType = async (type) => {
    try {
      const client = await pool.connect();
      const toursQuery =
        "SELECT * FROM tours_data.tour_data WHERE tour_type=$1";
      let result = await client.query(toursQuery, [type]);
      client.release();
      return result.rows;
    } catch (err) {
      throw err;
    }
}
const bookTour = async (type) => {
  try {
    const client = await pool.connect();
    // const toursQuery =
    //   "SELECT * FROM tours_data.tour_data WHERE tour_type=$1";
    // let result = await client.query(toursQuery, [type]);
    // client.release();
    // return result.rows;
  } catch (err) {
      throw err;
  }
}
exports.getToursByType = getToursByType;
exports.bookTour = bookTour;