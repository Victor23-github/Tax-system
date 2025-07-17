import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes/taxpayerRoutes.js';
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: false })); // For parsing application/x-www-form-urlencoded
app.use(
  cors({
    origin: 'https://tax-system-project.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

app.use('/api', router);

app.get('/', (req, res) => {
  res.json({ message: 'Hello TaxPayer!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
