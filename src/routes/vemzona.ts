import express from 'express';
import vemzonaController from "../controllers/vemzona";

const router: express.Router = express.Router();

router.post('/', vemzonaController.create);       // *C - INSERT
router.get('/', vemzonaController.getAll);        // *R - SELECT
router.get('/:id', vemzonaController.getOne);
router.put('/:id', vemzonaController.update);     // *U - UPDATE
router.delete('/:id', vemzonaController.delete);  // *D - DELETE

export default router;