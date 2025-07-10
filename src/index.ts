import dotenv from 'dotenv';
dotenv.config();

import app from './server';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
  });

