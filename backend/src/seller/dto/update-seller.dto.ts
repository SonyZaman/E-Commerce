import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';

export class UpdateSellerDto {
  
  name?: string;

  
  email?: string;

  
  password?: string;

  
  isActive?: boolean;
}
