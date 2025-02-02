import { body } from 'express-validator';

export const createRecipeValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('ingredients').isArray().withMessage('Ingredients must be an array'),
  body('instructions').notEmpty().withMessage('Instructions are required')
];