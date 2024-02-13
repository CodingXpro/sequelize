import User from '../models/userModel.js'; // Import the User model

async function createTables() {
  try {
    // Synchronize all defined models to the database
    await User.sync({ force: true }); // This will drop the table if it already exists and then create a new one
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
}

// Call the function to create tables
export default createTables;