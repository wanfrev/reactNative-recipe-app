import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import pool from '../db/db'; // Asegúrate de que esta importación sea correcta y que `pool` esté configurado

// Crear un nuevo usuario
export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insertar el nuevo usuario en la base de datos
    await pool.query('INSERT INTO Users (email, password) VALUES ($1, $2)', [email, hashedPassword]);
    res.status(201).send('User created');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating user');
  }
};

// Iniciar sesión de un usuario
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    // Buscar el usuario por email
    const result = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);
    const user = result.rows[0];
    // Verificar la contraseña
    if (user && await bcrypt.compare(password, user.password)) {
      // Obtener el secreto JWT
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        throw new Error('JWT_SECRET is not defined');
      }
      // Generar un token JWT
      const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send('Error logging in');
  }
};