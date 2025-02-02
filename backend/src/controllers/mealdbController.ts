import { Request, Response } from 'express';
import { fetchMealsByCategory, fetchMealById, searchMealsByName } from '../services/mealDbService';

export const getMealsByCategory = async (req: Request, res: Response) => {
  const { category } = req.params;
  try {
    const meals = await fetchMealsByCategory(category);
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).send('Error fetching meals by category');
  }
};

export const getMealById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const meal = await fetchMealById(id);
    res.status(200).json(meal);
  } catch (error) {
    res.status(500).send('Error fetching meal by ID');
  }
};

export const searchMeals = async (req: Request, res: Response) => {
  const { name } = req.query;
  try {
    const meals = await searchMealsByName(name as string);
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).send('Error searching meals by name');
  }
};