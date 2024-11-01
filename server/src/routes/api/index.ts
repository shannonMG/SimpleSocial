// src/routes/api/index.ts
import express from 'express';
import userRoutes from './user-routes';

const router = express.Router();

router.use('/users', userRoutes); // This will handle routes at /api/users

export default router; // Export the router as the default export
