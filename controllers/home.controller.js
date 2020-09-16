const carsService = require('../services/cars.service')
const Car = require('../models/car');
const car = require('../databaseModels/car');

class HomeController {
    async index(req, resp) {
        /*await carsService.create({
            mark: 'VW',
            model: 'Tiguan',
            year: 2020,
            price: 38000
        })*/

        const result = await carsService.findAll()
        let cars = []
        result.forEach(element => {
            cars.push(new Car(element.id, element.mark, element.model, element.year, element.price))
        });
        //console.log(cars)
        resp.render('index', {
            cars: cars
        });
    }

    async delete(req, resp) {
        console.log(req.params.id)
        const id = req.params.id
        carsService.delete(id)
        resp.redirect('../')
    }

    async create(req, resp) {
        resp.render('create')
    }

    async saveCar(req, resp) {
        if(!req.body) return resp.sendStatus(400);
        console.log(req.body);

        resp.redirect('../')
    }
}

module.exports = new HomeController();