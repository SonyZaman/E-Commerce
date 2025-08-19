
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SellerService } from '../seller/seller.service';
import { CreateSellerDto } from 'src/seller/dto/create-seller.dto';
import { LoginDto } from './login.dto'; // Login DTO for validation

@Injectable()
export class AuthService {
  constructor(
    private sellerService: SellerService, 
    private jwtService: JwtService
  ) {}

  // Sign up a new seller
  async signUp(createSellerDto: CreateSellerDto): Promise<CreateSellerDto> {
    return await this.sellerService.create(createSellerDto); // Save the seller directly without password hashing
  }

  // Sign in to generate JWT token
  async signIn(loginDto: LoginDto): Promise<{ access_token: string }> {
    const seller = await this.sellerService.findOne(loginDto.id);  // Now using email instead of id
    if (!seller) {
        throw new UnauthorizedException('Invalid credentials');
    }

    // Directly compare the plain password without bcrypt
    if (loginDto.password !== seller.password) {
        throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: seller.email, sub: seller.id }; // Payload for the JWT token
    return {
        access_token: await this.jwtService.signAsync(payload), // Generate JWT token
    };
  }
}
