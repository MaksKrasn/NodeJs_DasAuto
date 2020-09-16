const Car = require('../databaseModels/car')

class CarsService {
    async findAll() {
        return Car.find()
    }

    async create(car){
        const createdCar = new Car(car);
        return createdCar.save();
    }
    
}

module.exports = new CarsService()