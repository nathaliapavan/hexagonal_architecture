import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT;

app.get('/', (request: Request, response: Response) => {
  const message = request.query?.message ?? 'world';
  return response.send({
    message: `Hello ${message}!`,
  });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
