import express from 'express';
import routeIA from './routes/ia-route';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())
app.use(routeIA)


export default app