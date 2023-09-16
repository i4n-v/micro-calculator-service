import router from './config/router.config';
import DivisionController from './controllers/division.controller';

router.get('/', DivisionController.index);
router.post('/division', DivisionController.division);

export default router;
