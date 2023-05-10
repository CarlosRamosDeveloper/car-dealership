import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from "uuid"


import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto/index.dto';
import { error } from 'console';




@Injectable()
export class CarsService {
    private cars: Car[] = [];

    public findAll(){        
        return this.cars;
    }

    public findOneById(id: string) {    
        const car = this.cars.find(car => car.id === id );

        if (!car) 
        throw new NotFoundException(`El vehículo con el id "${id}" no existe`);
        
        return car;
    }

    public create( createCarDto: CreateCarDto) {
        console.log("Creating new car");
        
        const newCar: Car = {
            id: uuid(),
            brand: createCarDto.brand,
            model: createCarDto.model
        }

        console.log("New car created!")

        this.cars.push(newCar);

        return newCar;
    }

    public update(id: string, updateCarDto: UpdateCarDto){

        let carDB = this.findOneById(id);
        
        this.cars = this.cars.map(car => {
            if (car.id === id) {
                carDB = {
                    ...carDB,
                    ...updateCarDto,
                    id,
                }

                return carDB;
            }

            return car;
        });

        return carDB;
    }

    public delete ( id:string) {
        let car = this.findOneById(id);
        this.cars = this.cars.filter( car => car.id !== id );
        
        console.log(`Vehículo eliminado`)
        
    }

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars;
    }

}