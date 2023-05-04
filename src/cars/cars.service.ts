import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {id: 1,
        brand: "Toyota",
        model: "Supra"},
        {id: 2,
        brand: "Mitsubishi",
        model: "3000GT"},
        {id: 3,
        brand: "Nissan",
        model: "NSX"}
    ];

    public findAll(){        
        return this.cars;
    }

    public findOneById(id: number) {                
        return this.cars[id-1]
    }

}