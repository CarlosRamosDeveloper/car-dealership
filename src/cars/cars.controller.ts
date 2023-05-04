import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars: string[] = ["Toyota", "Honda", "Jeep"];

    @Get()
    getAllCars(){
        return this.cars;
    }

    @Get(":id")
    getCarById( @Param("id") id: number): string{        
        return  this.cars[id];
    }
}
