import dotenv from 'dotenv';
dotenv.config();

const port = Number(process.env.PORT);
const mongoUri = process.env.MONGO_URI ?? 'mongodb://localhost:27017/randomverse';

export const ENV = {
  PORT: Number.isFinite(port) && port > 0 ? port : 3000,
  MONGO_URI: mongoUri,
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  LOG_LEVEL: (process.env.LOG_LEVEL ?? 'info') as 'debug' | 'info' | 'warn' | 'error',
} as const;

export type Env = typeof ENV;

/* Optional: fail fast in production if a required secret is missing */
if (ENV.NODE_ENV === 'production' && (!ENV.MONGO_URI || ENV.MONGO_URI === 'mongodb://localhost:27017/randomverse')) {
  // throw new Error('MONGO_URI must be set in production');
}
