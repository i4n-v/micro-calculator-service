import router from './config/router.config';
import MultiplicationController from './controllers/multiplication.controller';

router.get('/', MultiplicationController.index);
router.post('/multiplication', MultiplicationController.multiplication);

export default router;
