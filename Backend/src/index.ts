import express from 'express';
import 'express-async-errors';
import PeopleRouter from './routers/PeopleRouter';
import errorLauncher from './middlewares/errorLauncher';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use('/', PeopleRouter);

app.use(errorLauncher);

app.listen(PORT, () => {
  console.log('Server is running on port 3001');
});

export default app;