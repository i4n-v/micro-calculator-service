import router from './config/router.config';
import OperatorController from './controllers/operator.controller';

router.get('/', OperatorController.index);
router.post('/sum', OperatorController.sum);
router.post('/subtraction', OperatorController.subtraction);
router.post('/multiplication', OperatorController.multiplication);
router.post('/division', OperatorController.divisition);

export default router;
