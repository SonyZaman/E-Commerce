// auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { SellerModule } from 'src/seller/seller.module'; // Import SellerModule
import { AuthController } from './auth.controller';

@Module({
  imports: [
    SellerModule,  // Import Seller module to access seller data
    JwtModule.register({
      secret: 'your_secret_key',  // Store this in an environment variable
      signOptions: { expiresIn: '1h' },  // Set JWT expiry time
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],  // Export AuthService for use in other modules
})
export class AuthModule {}
