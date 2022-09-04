import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 1234;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
});
