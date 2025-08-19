import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SellerModule } from './seller/seller.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration available globally
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: configService.get<string>('DB_PASSWORD'), // Now you can access the configuration here
        database: configService.get<string>('DB_NAME'), 
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService], // Injecting ConfigService
    }),
    SellerModule,
    ProductModule,
    AuthModule,
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
