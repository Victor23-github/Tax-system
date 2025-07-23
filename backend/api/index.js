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
    origin:
      'https://tax-system-wvnm-victor-akpans-projects-8a98b6d5.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);

app.use('/api', router);

app.get('/', (req, res) => {
  res.json({ message: 'Hello TaxPayer!' });
});

// export default app;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
