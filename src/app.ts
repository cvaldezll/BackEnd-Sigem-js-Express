import express from 'express';
import routerVemzona from "./routes/vemzona";

const app: express.Application = express();

app.use('/vemzona', routerVemzona);

export default app;