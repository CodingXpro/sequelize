import { DataTypes } from 'sequelize';
import { sequelize } from '../config/data.js'; // Import sequelize instance

// Define the User model
const User = sequelize.define(
  'User',
  {
    // Define attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
 
  {
    // Define options
    modelName: 'User',
    timestamps: true // Include timestamps (createdAt, updatedAt)
  }
);

// Export the User model
export default User;
