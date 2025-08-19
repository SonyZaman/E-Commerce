import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { SellerEntity } from '../seller/seller.entity';

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  productType: string; // New field for product type (e.g., "Electronics", "Clothing", etc.)

  @ManyToOne(() => SellerEntity, seller => seller.products) // Relationship with Seller
  seller: SellerEntity; // Seller associated with this product
}
