import express, { Application } from 'express';

const app: Application = express();

app.use(express.json());

const PORT: number = parseInt(process.env.PORT || '3000', 10);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
