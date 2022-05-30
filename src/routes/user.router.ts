import { Router, Request, Response } from 'express';

// Controllers
import { userController } from '../controllers/user.controllers'

const router: Router = Router();

router.get('/', userController.getAll);
router.get('/:id_user', userController.getUser);     // Read
router.post('/', userController.createUser);       // Create
// router.delete('/:id');  // Delete
// router.put('/:id');     // Update

export default router;