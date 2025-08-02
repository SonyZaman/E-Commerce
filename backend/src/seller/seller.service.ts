import { Injectable } from "@nestjs/common";
import { SellerDTO } from "./create-seller.dto";

@Injectable()
export class SellerService {
  private sellers: SellerDTO[] = [];

  
  getProfile(): string {
    return "Seller Profile Page";
  }

  
  createSeller(data: SellerDTO): SellerDTO {
    const newSeller: SellerDTO = {
      name: data.name,
      email: data.email,
      nid: data.nid,
    };
    this.sellers.push(newSeller);
    return newSeller;
  }

  
  findAll(): SellerDTO[] {
    return this.sellers;
  }


 getByNid(nid: string): SellerDTO | undefined {
    return this.sellers.find(seller => seller.nid === nid);
  }

}
