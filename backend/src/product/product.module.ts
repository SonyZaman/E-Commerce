import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';
import { ProductsController } from './product.controller';
import { SellerEntity } from '../seller/seller.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, SellerEntity])], // Import SellerEntity here
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}
