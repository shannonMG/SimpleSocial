import express from 'express';
import type { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models/index.js';

const router = express.Router();

// GET /users - Get all users
router.get('/', async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] }  // Exclude password from the response
    });
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// GET /users/:id - Get a user by ID
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] }
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// POST /users - Create a new user
router.post('/', async (req: Request, res: Response) => {
  const { email, password, location, time_zone } = req.body;
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      location,
      time_zone
    });
    res.status(201).json({
      id: newUser.id,
      email: newUser.email,
      location: newUser.location,
      time_zone: newUser.time_zone
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /users/:id - Update a user by ID
router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { email, password, location, time_zone } = req.body;
  try {
    const user = await User.findByPk(id);
    if (user) {
      if (email) user.email = email;
      if (password) user.password = await bcrypt.hash(password, 10);
      if (location) user.location = location;
      if (time_zone) user.time_zone = time_zone;
      await user.save();
      res.json({
        id: user.id,
        email: user.email,
        location: user.location,
        time_zone: user.time_zone
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE /users/:id - Delete a user by ID
router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export { router as userRouter };
