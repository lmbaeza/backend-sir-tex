import { Router, Request, Response } from 'express';

// Controllers
import { userController } from '../controllers/user.controllers'

const router: Router = Router();

router.get('/', userController.index);
// router.get('/:id');     // Read
// router.post('/');       // Create
// router.delete('/:id');  // Delete
// router.put('/:id');     // Update

export default router;