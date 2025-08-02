import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class SellerCustomExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): any;
}
