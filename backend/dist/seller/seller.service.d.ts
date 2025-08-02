import { SellerDTO } from "./create-seller.dto";
export declare class SellerService {
    private sellers;
    getProfile(): string;
    createSeller(data: SellerDTO): SellerDTO;
    findAll(): SellerDTO[];
    getByNid(nid: string): SellerDTO | undefined;
}
