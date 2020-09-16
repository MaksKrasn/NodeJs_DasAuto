const carsService = require('../services/cars.service')
const Car = require('../models/car')

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
            cars.push(new Car(element.mark, element.model, element.year, element.price))
        });
        console.log(cars)
        resp.render('index', {
            cars: cars
        });
    }
}

module.exports = new HomeController();