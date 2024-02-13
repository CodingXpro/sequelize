import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('sequelize', 'root', 'admin', {
    host: 'localhost', // Change this to your MySQL host if different
    dialect: 'mysql', // Specify the dialect, which is 'mysql' for MySQL databases
    logging: false // Disable logging for production
  });
  
  // Test the database connection
  export async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Database connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
