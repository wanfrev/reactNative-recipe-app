import express from 'express';
import { getMealsByCategory, getMealById, searchMeals } from '../controllers/mealdbController';

const router = express.Router();

router.get('/category/:category', getMealsByCategory);
router.get('/meal/:id', getMealById);
router.get('/search', searchMeals);

export default router;