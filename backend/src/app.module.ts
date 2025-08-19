import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerModule } from './seller/seller.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '01082000',
      database: 'ecommerce', //Change to your database name
      autoLoadEntities: true,
      synchronize: true,
    }),
    SellerModule,ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
