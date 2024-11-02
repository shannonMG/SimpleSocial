import express from 'express';
import {
  getAllCircle,
  getCircleById,
  createCircle,
  updateCircle,
  deleteCircle,
} from '../../controllers/circle-controller.js';

const router = express.Router();

// GET / - Get all circle
router.get('/', getAllCircle);

// GET /circle/:id - Get a circle by id
router.get('/:id', getCircleById);

// POST /circle - Create a new circle
router.post('/', createCircle);

// PUT /circle/:id - Update a circle by id
router.put('/:id', updateCircle);

// DELETE /circle/:id - Delete a circle by id
router.delete('/:id', deleteCircle);

export { router as circleRouter };
