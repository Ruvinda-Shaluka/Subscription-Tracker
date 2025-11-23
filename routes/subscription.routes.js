import {Router} from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
    res.send({title:'Get All Subscriptions'});
});

subscriptionRouter.get('/:id', (req, res) => {
    res.send({title:'Get Subscription details'});
});

subscriptionRouter.post('/', (req, res) => {
    res.send({title:'POST All Subscriptions'});
});

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