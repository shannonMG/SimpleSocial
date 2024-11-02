import express from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../../controllers/post-controller.js';

const router = express.Router();

// GET / - Get all circle
router.get('/', getAllPosts);

// GET /circle/:id - Get a circle by id
router.get('/:id', getPostById);

// POST /circle - Create a new circle
router.post('/', createPost);

// PUT /circle/:id - Update a circle by id
router.put('/:id', updatePost);

// DELETE /circle/:id - Delete a circle by id
router.delete('/:id', deletePost);

export { router as postRouter };