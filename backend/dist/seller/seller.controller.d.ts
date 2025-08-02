import { SellerService } from "./seller.service";
import { SellerDTO } from "./dto/create-seller.dto";
export declare class SellerController {
    private readonly sellerService;
    constructor(sellerService: SellerService);
    getProfile(): string;
    createSeller(data: SellerDTO): SellerDTO;
    inputSeller(data: SellerDTO): SellerDTO;
    findAll(): SellerDTO[];
    getByNid(nid: string): SellerDTO | string;
    uploadNID(file: Express.Multer.File): {
        message: string;
        file: Express.Multer.File;
    };
    helloBookApi(): string;
    All(): void;
    product(): any;
}
