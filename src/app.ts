import express, { Application } from 'express';
import appRoutes from './routes/app/app.route';  

const app: Application = express();

app.use(express.json());
app.use('/', appRoutes);

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
