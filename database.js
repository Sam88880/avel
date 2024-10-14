const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'database-1.c9o6wq20oeyq.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Sam1997117!',
  database: 'avel'
});

// Connect to the database
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;