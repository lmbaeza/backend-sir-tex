import { Router } from 'express';

// Controllers
import { codeController } from '../controllers/code.controller'

const router: Router = Router();

router.get('/', codeController.getAll);
router.get('/:id_code', codeController.getCode);        // Read
router.post('/', codeController.createCode);            // Create
router.delete('/:id_code', codeController.deleteCode);  // Delete
router.put('/:id_code', codeController.updateCode);     // Update

export default router;