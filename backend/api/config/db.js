import mysql from 'mysql2/promise.js';
import dotenv from 'dotenv';

dotenv.config();

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

//define database connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connection has been established and synced successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
connectDB();

export default sequelize;
