import express from 'express';
import handleRoutes from './routes/routes.js'
import cors from 'cors';
const app = express();

app.use(express.json())
app.use(cors);
app.use('/', handleRoutes);

export default app;