import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';


@Injectable()
export class SeedService {

  pupulateDB(){

    CARS_SEED
    BRANDS_SEED

    return "Seed Executed successfully";
  }

}
