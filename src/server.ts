import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function startServer() {
  try {
    await mongoose.connect(config.dbURL);
    console.log(`🔥[database]: Connected to database at ${config.dbURL}`);
    app.listen(config.port, () => {
      console.log(
        `⚡️[server]: Server is running at http://localhost:${config.port}`,
      );
    });
  } catch (error) {
    console.log('Error starting server: ', error);
  }
}
startServer();
