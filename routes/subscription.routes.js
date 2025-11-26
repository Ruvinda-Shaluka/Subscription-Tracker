import {Router} from 'express';
import authorize from "../middlewares/auth.middleware.js";
import {createSubscription} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({title:'Get All Subscriptions'});
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send({title:'Get Subscription details'});
});

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
    res.send({title:'Update Subscription Details'});
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({title:'Delete Subscription Details'});
});

subscriptionRouter.get('/user/:id', (req, res) => {
    res.send({title:'Get All user subscriptions'});
});

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({title:'Cancel Subscription Details'});
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({title:'Get upcoming renewal details'});
});

export default subscriptionRouter;