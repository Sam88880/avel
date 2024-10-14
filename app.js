const mysql = require('mysql2');
const express = require('express');
// AWS 
// #email: samkiengineer@gmail.com
// run: node app.js

const app = express();
const db = require('./database'); // Import the database connection

const cors = require('cors');
const { S3Client, GetObjectCommand } = require('@aws-sdk/client-s3');

// Configure AWS to use your credentials
const s3Client = new S3Client({
  
  region: 'us-east-1', // change to your bucket's region
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,  // Secure access key ID
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY  // Secure secret access key
  }

});

// Enable All CORS Requests
app.use(cors());

app.get('/product', (req, res) => {
  const productId = req.query.searchTerm;  // This would typically be from user input or URL parameter
  
  // Using a parameterized query to prevent SQL injection
  const query = 'SELECT * FROM product WHERE category_ch = ?';

  // Passing the productId as a parameter
  db.query(query, [productId], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error executing query' });
      return;
    }
    res.json(results);
  });
});

// Image retrieval route from S3
app.get('/image/:key', async (req, res) => {
  const requestedKey = req.params.key;
  console.log('Requested S3 Key:', `photos/${requestedKey}`);

  const params = {
    Bucket: 'avel',
    Key: `photos/${requestedKey}`  // Prepend 'photos/' to the key
  };

  try {
    const command = new GetObjectCommand(params);
    const data = await s3Client.send(command);

    res.setHeader('Content-Type', data.ContentType);
    data.Body.pipe(res);  // Send the image as the response
  } catch (err) {
    console.error('Error fetching image:', err);
    res.status(500).send('Failed to retrieve image');
  }
});


app.get('/search', (req, res) => {
  const searchTerm = req.query.searchTerm; // Extract the searchTerm from the query string

  // Correct SQL query using placeholders for parameters
  const query = 'SELECT * FROM product WHERE id LIKE ? OR category_en LIKE ? or category_ch LIKE ?or Description LIKE ?';

  // Passing parameters safely to the SQL query to prevent SQL injection
  db.query(query, [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`,`%${searchTerm}%`], (err, results) => {
    if (err) {
      console.error('Error fetching products: ', err);
      res.status(500).send('Failed to retrieve products');
    } else {
      res.json(results);
    }
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});