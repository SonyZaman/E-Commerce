import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { SellerEntity } from '../seller/seller.entity';
//exception handling must needed in service layer to handle errors gracefully
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
    @InjectRepository(SellerEntity)
    private sellerRepository: Repository<SellerEntity>,
  ) {}

  // Create a new product and associate it with a seller
  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const { sellerId, ...productData } = createProductDto;

    // Find the seller by sellerId
    const seller = await this.sellerRepository.findOne({ where: { id: sellerId } });
    if (!seller) {
      throw new NotFoundException(`Seller with ID ${sellerId} not found`);
    }

    const product = this.productRepository.create({
      ...productData,
      seller, // Associate the seller with the product
    });

    return await this.productRepository.save(product);
  }

  // Get all products
  async findAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find({ relations: ['seller'] });
  }

  // Get product by ID
  async findOne(id: number): Promise<ProductEntity> {
    const product = await this.productRepository.findOne({ where: { id }, relations: ['seller'] });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  // Update product details
  async update(id: number, updateProductDto: UpdateProductDto): Promise<ProductEntity> {
    const { sellerId, ...updateData } = updateProductDto;

    let product = await this.productRepository.findOne({ where: { id }, relations: ['seller'] });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    if (sellerId) {
      const seller = await this.sellerRepository.findOne({ where: { id: sellerId } });
      if (!seller) {
        throw new NotFoundException(`Seller with ID ${sellerId} not found`);
      }
      product.seller = seller;
    }

    product = Object.assign(product, updateData);

    return this.productRepository.save(product);
  }

  // Delete a product
  async remove(id: number): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }

  //relation api
  // Get all products by a specific seller
  async getProductsBySeller(sellerId: number): Promise<ProductEntity[]> {
    const seller = await this.sellerRepository.findOne({ where: { id: sellerId } });
    if (!seller) {
      throw new NotFoundException(`Seller with ID ${sellerId} not found`);
    }

    return this.productRepository.find({ where: { seller }, relations: ['seller'] });
  }

}
