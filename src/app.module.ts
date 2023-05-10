import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { SeedModule } from './seed/seed.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    CarsModule, 
    BrandsModule, 
    SeedModule, 
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,"..","public")
  })],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
