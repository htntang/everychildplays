import jwt from 'jsonwebtoken'
import { User } from '../models/userModel.js'

const authMiddleware = async (req, res, next) => {
  try {
    // Check if token exists in local storage
    const token = localStorage.getItem('token')

    if (!token) {
      throw new Error('Not authorized, Token not found')
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Get user from the token
    req.user = await User.findById(decoded.id).select('-password')

    next()
  } catch (error) {
    console.log(error)
    res.status(401)
    throw new Error('Not authorized')
  }
}

export { authMiddleware }
