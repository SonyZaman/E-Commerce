import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class SellerGuard implements CanActivate {
    private validUsername;
    private validPassword;
    canActivate(context: ExecutionContext): boolean;
}
