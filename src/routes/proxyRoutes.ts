import { Router } from 'express';
import { ProxyController } from '../controllers/proxyController';

const router = Router();
const proxyController = new ProxyController();

router.get('/CEP/Address/:cep', proxyController.getAddress);
router.post('/shipping/quote', proxyController.postQuote);


export { router };
