import { body } from 'express-validator';

export const createUserValidator = [
  body('username').notEmpty().withMessage('Username is required'),
  body('email').isEmail().withMessage('Email is invalid'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];