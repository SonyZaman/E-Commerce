import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SellerService } from './sellers.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellerService: SellerService) {}

  // Create a new seller
  @Post('create')
  async create(@Body() createSellerDto: CreateSellerDto) {
    return await this.sellerService.create(createSellerDto);
  }

  // Get all sellers
  @Get()
  async findAll() {
    return await this.sellerService.findAll();
  }

  // Get seller by ID
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.sellerService.findOne(id);
  }

  // Update seller details
  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() updateSellerDto: UpdateSellerDto,
  ) {
    return await this.sellerService.update(id, updateSellerDto);
  }

  // Delete seller
  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    return await this.sellerService.remove(id);
  }
}
