import { Router } from 'express';

// Controllers
import { companyController } from '../controllers/company.controller'

const router: Router = Router();

router.get('/', companyController.getAll);
router.get('/:id_company', companyController.getCompany);        // Read
router.post('/', companyController.createCompany);               // Create
router.delete('/:id_company', companyController.deleteCompany);  // Delete
router.put('/:id_company', companyController.updateCompany);     // Update

export default router;