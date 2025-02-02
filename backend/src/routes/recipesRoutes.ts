import express, { Request, Response, NextFunction } from 'express';
import { importExternalRecipes, getRecipes, getUserRecipes, getFavoriteRecipes, addFavoriteRecipe } from '../controllers/recipeController';
import { createRecipeValidator } from '../validators/recipeValidator';
import { validationResult } from 'express-validator';

const router = express.Router();

router.get('/import-external-recipes', importExternalRecipes);
router.get('/', getRecipes);
router.get('/my-recipes', getUserRecipes);
router.get('/favorites', getFavoriteRecipes);
router.post('/favorites', addFavoriteRecipe);

// Supongamos que tienes una ruta para crear recetas
router.post('/', createRecipeValidator, (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }

  // Lógica para crear una receta
  res.status(201).json({ message: 'Recipe created successfully' });
});

export default router;