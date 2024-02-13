import express from 'express';
import register from './controllers/userController.js';
import { testConnection } from './config/data.js';
import createTables from './middleware/table.js';

const app = express();

app.use(express.json());

const port = 3000;

// Initialize Sequelize with your MySQL database credentials

createTables()
  .then(() => {
    // Register the 'register' route after creating tables
    app.post('/register', register);

    // Start the server after creating tables
    
  })
  .catch((error) => {
    console.error('Error creating tables:', error);
  });

  app.listen(port, () => {
    testConnection();
    console.log("Server is running on 3000");
  });
// Call the function to test the connection
