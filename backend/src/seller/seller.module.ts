// src/seller/seller.module.ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { SellerMiddleware } from './seller.middleware';

@Module({
  controllers: [SellerController],
  providers: [SellerService],
})
export class SellerModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SellerMiddleware).forRoutes('seller')
  }
}
