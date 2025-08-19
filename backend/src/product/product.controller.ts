import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './product.entity';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  // Create a new product
  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  // Get all products
  @Get()
  async findAll() {
    return await this.productService.findAll();
  }

  // Get product by ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.productService.findOne(id);
  }

  // Update product details
  @UseGuards(JwtAuthGuard)
  @Put('update/:id')
  async update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return await this.productService.update(id, updateProductDto);
  }

  // Delete product
  @UseGuards(JwtAuthGuard)
  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    return await this.productService.remove(id);
  }

 //relation api
 // Get all products by a specific seller
  @Get('seller/:sellerId')
  async getProductsBySeller(@Param('sellerId') sellerId: number): Promise<ProductEntity[]> {
    return await this.productService.getProductsBySeller(sellerId);
  }

}


