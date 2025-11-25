import {Router} from 'express';
import {getUser, getUsers} from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const useRouter = Router();

useRouter.get('/', getUsers);

useRouter.get('/:id',  authorize, getUser);

useRouter.post('/', (req, res) => res.send({title:'GET All Users'}));

useRouter.put('/:id', (req, res) => res.send({title:'GET All Users'}));

useRouter.delete('/:id', (req, res) => res.send({title:'GET All Users'}));


export default useRouter;