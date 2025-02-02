import express, { Request, Response, NextFunction } from 'express';
import { createUserValidator } from '../validators/userValidator';
import { validationResult } from 'express-validator';

const router = express.Router();

router.post('/', createUserValidator, (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // Lógica para crear un usuario
  res.status(201).json({ message: 'User created successfully' });
});

export default router;