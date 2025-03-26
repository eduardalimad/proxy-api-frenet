import express, { Express } from 'express';
import "dotenv/config";
import { router } from './routes/proxyRoutes';
import { localIp } from './infra/userIP';

const port = process.env.PORT ?? 3000;
const app: Express = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando em http://${localIp}:${port}`);
  console.log(`Servidor rodando em http://localhost:${port}`);
});
