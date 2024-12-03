import { Router } from 'express';
import { UserService } from '../services/userService.js';

export const usersRouter = Router();
const userService = new UserService();

usersRouter.get('/', async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
});

usersRouter.get('/:id', async (req, res) => {
  const user = await userService.getUserById(parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});