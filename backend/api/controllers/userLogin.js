import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import userModel from '../models/user.js';

async function registerTaxPayer(req, res) {
  try {
    if (
      !req.body ||
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.email ||
      !req.body.password
    ) {
      return res.status(400).json({
        message: 'firstName, lastName, email, and password are required.',
      });
    }
    const { firstName, lastName, password, email } = req.body;
    const username = `${firstName} ${lastName}`;

    // check if user already exists
    const exitingUser = await userModel.findOne({ where: { username } });
    if (!exitingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    const salt = 10;
    const hashPassword = await bcrypt.hash(password, salt);

    //create new user
    const newUser = await userModel.create({
      username,
      password: hashPassword,
      email,
    });

    // generate jwt
    const token = jwt.sign({ userID: newUser.userID }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({
      message: 'User registration successful',
      token,
    });
  } catch (error) {
    console.error('Error during registration:', error);
    if (error.name === 'SequelizeValidationError') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function taxPayerLogin(req, res) {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await userModel.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({
      message: 'Login successful',
      token,
    });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export { registerTaxPayer, taxPayerLogin };
