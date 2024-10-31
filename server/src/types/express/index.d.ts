// src/types/express/index.d.ts
import { UserAttributes } from '../../models/user';

declare global {
  namespace Express {
    interface Request {
      user?: UserAttributes; // Adjust type based on your user object structure
    }
  }
}
