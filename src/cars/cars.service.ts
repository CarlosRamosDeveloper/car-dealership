import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from "uuid"

import { Car } from './interfaces/car.interface';


@Injectable()
export class CarsService {
    private cars: Car[] = [
        {id: uuid(),
        brand: "Toyota",
        model: "Supra"},
        {id: uuid(),
        brand: "Mitsubishi",
        model: "3000GT"},
        {id: uuid(),
        brand: "Nissan",
        model: "NSX"}
    ];

    public findAll(){        
        return this.cars;
    }

    public findOneById(id: string) {    
        const car = this.cars.find(car => car.id === id );

        if (!car) 
        throw new NotFoundException(`El vehículo con el id "${id}" no existe`);
        
        return car;
    }

}