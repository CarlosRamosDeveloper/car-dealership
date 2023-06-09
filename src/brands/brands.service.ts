import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from "uuid";

@Injectable()
export class BrandsService {

  private brands: Brand[] = [];
  
  create(createBrandDto: CreateBrandDto) {

    const { name } = createBrandDto;

    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime()
    }

    this.brands.push();
    
    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find( brand => brand.id === id )
    if ( !brand ) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }
    return brand;
  }
  
  /*TODO:
    Bug conocido
    Patch no actualiza correctamente
  */
  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandDB = this.findOne(id);

    this.brands = this.brands.map( brand => {
      if ( brand.id === id) {
        brandDB.updatedAt = new Date().getTime();
        brandDB = { ...brandDB, ...updateBrandDto}

        return brandDB;
      }

      return brand;
    });
    return brandDB;
  }

  remove(id: string) {

    let brand = this.findOne(id);
    this.brands = this.brands.filter (brand => {
      brand.id !== id
    });

    console.log(`Brand named ${brand.name} deleted from existence`);
  }

  fillBrandsWithSeedData( brands: Brand[]) {
    this.brands = brands
  }
}