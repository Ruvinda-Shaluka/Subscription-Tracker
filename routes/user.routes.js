import {Router} from 'express';

const useRouter = Router();

useRouter.get('/', (req, res) => res.send({title:'GET All Users'}));

useRouter.get('/:id', (req, res) => res.send({title:'GET All Users'}));

useRouter.post('/', (req, res) => res.send({title:'GET All Users'}));

useRouter.put('/:id', (req, res) => res.send({title:'GET All Users'}));

useRouter.delete('/:id', (req, res) => res.send({title:'GET All Users'}));


export default useRouter;