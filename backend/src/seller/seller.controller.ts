import { Controller, Post, Get, Body, UsePipes, ValidationPipe, UploadedFile, UseInterceptors, Param, UseGuards, BadRequestException, UseFilters, HttpException, Req, Res } from "@nestjs/common";
import { SellerService } from "./seller.service";
import { SellerDTO } from "./dto/create-seller.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage, MulterError } from "multer";
import { SellerGuard } from "./seller.guard";
import { SellerPipeEmail, SellerPipeName, SellerPipeNid } from './pipes/seller.pipe'; // Adjust relative path
import { SellerCustomExceptionFilter } from "./exception/seller.exception.filter";
import { SellerInterceptor } from "./interceptor/seller.interceptor";
import { Request, Response } from 'express';



@Controller("seller")
export class SellerController {
  constructor(private readonly sellerService: SellerService) {}

 
  @Get("profile")
  @UseGuards(new SellerGuard())
  getProfile(): string {
    return this.sellerService.getProfile();
  }

 //builtin pipe validation
  @Post("create")
  @UsePipes(new ValidationPipe())
  createSeller(@Body() data: SellerDTO): SellerDTO {
    return this.sellerService.createSeller(data);
  }

//custom pipe validation
  @Post("input")
  @UseGuards(new SellerGuard())
  @UsePipes(new SellerPipeNid(),new SellerPipeEmail(),new SellerPipeName())
  inputSeller(@Body(new SellerPipeNid(),new SellerPipeEmail(),new SellerPipeName()) data: SellerDTO): SellerDTO {
    return this.sellerService.createSeller(data);
  }


@Get('all')
findAll(): SellerDTO[] {
  return this.sellerService.findAll();
}
@Get('find/:nid')
getByNid(@Param('nid') nid: string): SellerDTO | string {
  const seller = this.sellerService.getByNid(nid);
  if (!seller) {
    return `Seller with NID ${nid} not found.`;
  }
  return seller;
}





  @Post("uploadfile")
  @UseInterceptors(
    FileInterceptor("file", {
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|jpeg|png|pdf)$/)) {
          cb(null, true);
        } else {
          cb(new MulterError("LIMIT_UNEXPECTED_FILE", "file"), false);
        }
      },
      limits: { fileSize: 2000000 }, 
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          cb(null, Date.now() + "-" + file.originalname);
        },
      }),
    })
  )
  uploadNID(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return { message: "NID uploaded successfully", file };
  }

 //custom exception
  @Get('exception')
  helloBookApi():string{


    throw new BadRequestException({

   
    status: 400,
    error: "this my custmom error"

  }

  );

    return "Hi, i am seller";
  }

  //custom exceptionFilter

  @Get("exceptionFilter")
  @UseFilters(SellerCustomExceptionFilter)  
  All() {
    
    throw new BadRequestException();
    //throw new HttpException('Forbidden', 403); // Example exception
  }



  //interceptor: can modify both --request and response
  //interceptor er through attach product object and response change
  @Post("product")
  @UseInterceptors(SellerInterceptor)
  product(): any {
    return "this is the response";
  }

}