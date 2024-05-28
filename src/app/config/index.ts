import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file
const envPath = path.join(process.cwd(), '/.env');
dotenv.config({ path: envPath });
console.log('envPath', envPath);

// Export configuration object
export default {
  port: process.env.PORT,
  dbURL: process.env.DATABASE_URL || 'mongodb://localhost:27017/test',
};
