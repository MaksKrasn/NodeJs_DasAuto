const express = require('express')
const router = express.Router()
const HomeController = require('../controllers/home.controller')

router.get('/', HomeController.index)
router.get('/delete/:id?', HomeController.delete)
router.get('/create', HomeController.create)
router.post('/create', HomeController.saveCar)


module.exports = router