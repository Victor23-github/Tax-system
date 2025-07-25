import express from 'express';

import { registerTaxPayer, taxPayerLogin } from '../controllers/userLogin.js';

const router = express.Router();

router.post('/register', registerTaxPayer);
router.post('/login', taxPayerLogin);

export default router;
