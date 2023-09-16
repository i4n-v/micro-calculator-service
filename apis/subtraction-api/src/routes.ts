import router from './config/router.config';
import SubtractionController from './controllers/subtraction.controller';

router.get('/', SubtractionController.index);
router.post('/subtraction', SubtractionController.subtraction);

export default router;
