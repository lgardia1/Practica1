import express from 'express';
import CardController from '../Controller/CardController';

const route = express.Router();

route.get('/card', (req, res)=>{
    try {
        const cards = CardController.getCards();
        res.status(200).json(cards);
    }catch(err) {
        res.status(400).json(err.message);
    }

});

route.post('/card', (req, res)=>{
    try{
        const card = CardController.saveCard(req.body);
        res.status(201).json(card);
    }catch(err) {
        res.status(400).json(err.message);
    }
})

export default route;