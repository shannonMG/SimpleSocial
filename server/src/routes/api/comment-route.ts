import express from 'express';
import {
  getAllPostComments,
  getPostCommentsId,
  createPostComment,
  updateComment,
  deleteComment,
} from '../../controllers/comment-controller.js';

const router = express.Router();

// GET / - Get all comment
router.get('/', getAllPostComments);

// GET /comment/:id - Get a comment by id
router.get('/:id', getPostCommentsId);

// POST /comment - Create a new circle
router.post('/posts/postId/comments', createPostComment);

// PUT /comment/:id - Update a circle by id
router.put('/posts/postId/comments', updateComment);

// DELETE /comments/:commentid - Delete a circle by id
router.delete('/comments/:commentid', deleteComment);

export { router as postRouter };