import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class SellerPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
     // Check if the value is a string with exactly 3 letters
     if (typeof value.name !== 'string' || !/^[A-Za-z]{3}$/.test(value.name)) {
        throw new BadRequestException('Name must be exactly 3 alphabetic characters');
      }

      return value;
  
  }
}
