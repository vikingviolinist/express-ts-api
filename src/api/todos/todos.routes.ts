import { Router } from 'express';
import {
  findAll,
  findOne,
  createOne,
  updateOne,
  deleteOne,
} from './todos.handlers';
import { validateRequest } from '../../middlewares';
import { Todo } from './todos.model';
import { ParamsWithId } from '../../interfaces/ParamsWithId';

const router = Router();

router.get('/', findAll);
router.get(
  '/:id',
  validateRequest({
    params: ParamsWithId,
  }),
  findOne
);
router.post(
  '/',
  validateRequest({
    body: Todo,
  }),
  createOne
);
router.put(
  '/:id',
  validateRequest({
    body: Todo,
  }),
  updateOne
);
router.delete(
  '/:id',
  validateRequest({
    params: ParamsWithId,
  }),
  deleteOne
);

export default router;
