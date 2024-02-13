import User from '../models/userModel.js'; // Import the User model
import { testConnection } from '../config/data.js'; // Import testConnection without curly braces

// Controller function for user registration
async function register(req, res) {
  try {
    // Extract user data from request body
    const { username, email, password } = req.body;

    // Check if the username or email already exists
    const existingUser = await User.findOne({
      where: {
        email: email
      }
    });

    // If user already exists, return an error
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    // Create a new user record
    const newUser = await User.create({
      username: username,
      email: email,
      password: password // Password should be hashed before saving to the database in a real application
    });

    // Return success response
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    // Handle any errors
    console.error('Error in user registration:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Export the controller function
export default register;
