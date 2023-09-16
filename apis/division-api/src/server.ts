import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import errorHandlerMidleWare from './midlewares/errorHandler.midleware';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandlerMidleWare);

app.listen(process.env.APP_PORT, () => {
  console.log(`✅ Division server started at http://localhost:${process.env.APP_PORT}`);
});
