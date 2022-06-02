import { Router } from 'express';

// Controllers
import { containerController } from '../controllers/container.controller'

const router: Router = Router();

router.get('/', containerController.getAll);
router.get('/:id_container', containerController.getContainer);        // Read
router.post('/', containerController.createContainer);                 // Create
router.delete('/:id_container', containerController.deleteContainer);  // Delete
router.put('/:id_container', containerController.updateContainer);     // Update

export default router;