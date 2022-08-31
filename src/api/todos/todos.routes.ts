import { Router, Response, Request } from 'express';
import Todo from './todos.model';

const router = Router();

router.get('/', (req: Request, res: Response<Todo[]>) => {
  res.json([
    {
      content: 'Learn TypeScript',
      done: false,
    },
  ]);
});

export default router;
