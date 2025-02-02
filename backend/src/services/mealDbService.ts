import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMealsByCategory = async (category: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/filter.php?c=${category}`);
    return response.data.meals;
  } catch (error) {
    console.error('Error fetching meals by category:', error);
    return [];
  }
};

export const fetchMealById = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
    return response.data.meals[0];
  } catch (error) {
    console.error('Error fetching meal by ID:', error);
    return null;
  }
};

export const searchMealsByName = async (name: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    return response.data.meals;
  } catch (error) {
    console.error('Error searching meals by name:', error);
    return [];
  }
};