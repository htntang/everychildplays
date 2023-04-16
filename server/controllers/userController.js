import { User } from '../models/userModel.js';

// Create new user
const createUser = async (req, res) => {
    try {
      const { username, email, password, } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'User with this email already exists' });
  
      const newUser = new User({ username, email, password });
  
      await newUser.save();
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong with server' });
      console.error(error);
    }
  };

// Get user by username
const getUserByUsername = async (req, res) => {
    try {
      const user = await User.findOne({ username: req.params.username });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Server error' });
    }
  };

// Update user by username
const updateUserByUsername = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      user.email = email;
      user.password = password;
      await user.save();
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Server error' });
    }
  };

// Delete user by username
const deleteUserByUsername = async (req, res) => {
    try {
      const user = await User.findOneAndDelete({ username: req.params.username });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
export { createUser, getUserByUsername, updateUserByUsername, deleteUserByUsername }