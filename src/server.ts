import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import worldRoutes from './routes/world.routes';
import characterRoutes from './routes/character.routes';

import { errorHandler } from './utils'; 
import { requestId } from './utils/middleware/requestId';

const app = express();

// Middleware globali 
app.use(requestId);            
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// Route
app.use('/worlds', worldRoutes);
app.use('/characters', characterRoutes);



export default app;



