import { IsString, IsDecimal, IsInt } from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsDecimal()
  price: number;

  @IsString()
  productType: string; // New field for product type (e.g., "Electronics", "Clothing", etc.)

  @IsInt()
  sellerId: number;
}