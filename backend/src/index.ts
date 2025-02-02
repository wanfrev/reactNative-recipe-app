import express from 'express';
import dotenv from 'dotenv';
import recipeRoutes from './routes/recipesRoutes';
import userRoutes from './routes/usersRoutes';
import mealDbRoutes from './routes/mealdbRoutes';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/meals', mealDbRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});