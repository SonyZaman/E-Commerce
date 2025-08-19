import { IsString, IsEmail, IsBoolean } from 'class-validator';

export class CreateSellerDto {
 
  name: string;

 
  email: string;

 
  password: string;

 
  isActive: boolean;
}
