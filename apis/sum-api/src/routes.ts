import router from './config/router.config';
import SumController from './controllers/sum.controller';

router.get('/', SumController.index);
router.post('/sum', SumController.sum);

export default router;
