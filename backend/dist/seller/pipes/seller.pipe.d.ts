import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
export declare class SellerPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): any;
}
