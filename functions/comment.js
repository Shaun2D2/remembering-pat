require('dotenv').config();

const mysql = require('mysql');

exports.handler = async () => {
  const connection = mysql.createConnection({
    host: 'ls-4222a3c0b2a92701bcb81cdb691955cc8bec9aa3.c8xf1yd7mqd4.us-west-2.rds.amazonaws.com',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'REMEMBER',
    charset: 'utf8mb4',
  });

  connection.connect();

  try {
    const response = await new Promise((resolve, rej) => {
      connection.query('SELECT * FROM comment WHERE appID=2;', (err, res) => {
        if (err) return rej(err);

        resolve(res);
      });
    });

    connection.destroy();

    return {
      statusCode: 200,
      body: JSON.stringify({ code: 200, data: response }),
    };
  } catch (e) {
    connection.destroy();

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'something went wrong!' }),
    };
  }
};
