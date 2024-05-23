import express, { Application } from 'express';
import appRoutes from './routes/app/app.route';  
import Logger, { LogLevel } from 'obedjs-logger';

const logger = new Logger(LogLevel.DEBUG, 'project.log');


const app: Application = express();

app.use(express.json());
app.use('/', appRoutes);

const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.listen(PORT, () => {
  logger.info(`Obedjs listening on port ${PORT}`);
});

export default app;
