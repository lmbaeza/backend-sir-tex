import { Router } from 'express';

// Controllers
import { userController } from '../controllers/user.controllers'

const router: Router = Router();

router.get('/', userController.getAll);
router.get('/:id_user', userController.getUser);          // Read
router.post('/', userController.createUser);              // Create
router.delete('/:id_user', userController.deleteUser);    // Delete
router.put('/:id_user', userController.updateUser);       // Update

router.get('/:id_user/:id_incentive', userController.getUser);

export default router;