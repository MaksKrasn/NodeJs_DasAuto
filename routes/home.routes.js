const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/home.controller')

router.get('/', HomeController.index)
router.get('/delete/:id?', HomeController.delete)
router.get('/create', HomeController.create)
router.post('/create', HomeController.saveCar)
/*router.get('/create', function(req, resp){
    resp.render('create')
})

router.post('/create', function(req, resp){
    //if(!req.body) return resp.sendStatus(400);
    console.log(req.body);

    resp.redirect('../')
})*/


module.exports = router