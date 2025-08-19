import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerEntity } from './seller.entity';
import { SellersController } from './sellers.controller';
import { SellerService } from './sellers.service';
//import { DatabaseModule } from './database.module';  // If you have a separate DB module

@Module({
  imports: [  TypeOrmModule.forFeature([SellerEntity]) ],
  controllers: [SellersController],
  providers: [SellerService],
})
export class SellerModule {}
