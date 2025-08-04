import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import worldRoutes from './routes/world.routes';
import characterRoutes from './routes/character.routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));


app.use('/worlds', worldRoutes);
app.use('/characters', characterRoutes);


app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(err.statusCode || 500).json({ error: err.message || 'Internal Server Error' });
});

export default app;


