import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SellerEntity } from './seller.entity';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';

@Injectable()
export class SellerService {
  constructor(
    @InjectRepository(SellerEntity)
    private sellerRepository: Repository<SellerEntity>,  // SellerEntityRepository ইনজেক্ট করা হচ্ছে
  ) {}

  // Create a new seller
  async create(createSellerDto: CreateSellerDto): Promise<SellerEntity> {
    const seller = this.sellerRepository.create(createSellerDto);
    return await this.sellerRepository.save(seller);
  }

  // Get all sellers
  async findAll(): Promise<SellerEntity[]> {
    return await this.sellerRepository.find();
  }

  // Get seller by ID
  async findOne(id: number): Promise<SellerEntity | null> {
    return await this.sellerRepository.findOne({ where: { id } });
  }

  // Update a seller's details
  async update(id: number, updateSellerDto: UpdateSellerDto): Promise<SellerEntity | null> {
    await this.sellerRepository.update(id, updateSellerDto);
    return await this.sellerRepository.findOne({ where: { id } });
  }

  // Delete a seller
  async remove(id: number): Promise<void> {
    await this.sellerRepository.delete(id);
  }
}

