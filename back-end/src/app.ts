import express from 'express';
import routeIA from './routes/ia-route';

const app = express();
app.use(express.json())
app.use(routeIA)


export default app