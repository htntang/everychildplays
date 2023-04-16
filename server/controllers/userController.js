import { User } from '../models/userModel.js';

const createUser = async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'User with this email already exists' });
  
      const newUser = new User({ username, email, password });
  
      await newUser.save();
  
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
      console.error(error);
    }
  };

export { createUser }