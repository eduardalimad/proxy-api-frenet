import { Request, Response } from 'express';
import { frenetClient } from '../externalServices/frenet-client.axios';

export class ProxyController {

  async getAddress(req: Request, res: Response) {
    try {
      const cep = req.params.cep;
      const response = await frenetClient.get(`/CEP/Address/${cep}`);
      res.json(response.data);
    } catch (error) {
      console.error('Erro ao conectar à API externa:', (error as Error).message);
      res.status(500).json({ error: 'Erro ao conectar à API externa' });
    }
  }

  async postQuote(req: Request, res: Response) {
    try {
      const response = await frenetClient.post('/shipping/quote', req.body);
      res.json(response.data);
    } catch (error) {
      console.error('Erro ao conectar à API externa:', (error as Error).message);
      res.status(500).json({ error: 'Erro ao conectar à API externa' });
    }
  }
}

