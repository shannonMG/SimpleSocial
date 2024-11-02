import express from 'express';
import {
  getAllCircleUsers,
  getCircleUsersById,
  createCircleUser,
  updateCircleUser,
  deleteCircleUser,
} from '../../controllers/circleuserscontroller.js';

const router = express.Router();

// GET / - Get all circleuser
router.get('/', getAllCircleUsers);

// GET /circle/:id - Get a circle by id
router.get('circles/:id', getCircleUsersById);

// POST /circle - Create a new circle
router.post('/', createCircleUser);

// PUT /circle/:id - Update a circle by id
router.put('/:id', updateCircleUser);

// DELETE /circle/:id - Delete a circle by id
router.delete('/:id', deleteCircleUser);

export { router as circleuserRouter };