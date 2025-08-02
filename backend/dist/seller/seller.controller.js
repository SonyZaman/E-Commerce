"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerController = void 0;
const common_1 = require("@nestjs/common");
const seller_service_1 = require("./seller.service");
const create_seller_dto_1 = require("./dto/create-seller.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const seller_guard_1 = require("./seller.guard");
const seller_pipe_1 = require("./pipes/seller.pipe");
let SellerController = class SellerController {
    sellerService;
    constructor(sellerService) {
        this.sellerService = sellerService;
    }
    getProfile() {
        return this.sellerService.getProfile();
    }
    createSeller(data) {
        return this.sellerService.createSeller(data);
    }
    inputSeller(data) {
        return this.sellerService.createSeller(data);
    }
    findAll() {
        return this.sellerService.findAll();
    }
    getByNid(nid) {
        const seller = this.sellerService.getByNid(nid);
        if (!seller) {
            return `Seller with NID ${nid} not found.`;
        }
        return seller;
    }
    uploadNID(file) {
        console.log(file);
        return { message: "NID uploaded successfully", file };
    }
    helloBookApi() {
        throw new common_1.BadRequestException({
            status: 400,
            error: "this my custmom error"
        });
        return "this is book";
    }
};
exports.SellerController = SellerController;
__decorate([
    (0, common_1.Get)("profile"),
    (0, common_1.UseGuards)(new seller_guard_1.SellerGuard()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SellerController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Post)("create"),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seller_dto_1.SellerDTO]),
    __metadata("design:returntype", create_seller_dto_1.SellerDTO)
], SellerController.prototype, "createSeller", null);
__decorate([
    (0, common_1.Post)("input"),
    (0, common_1.UseGuards)(new seller_guard_1.SellerGuard()),
    (0, common_1.UsePipes)(new seller_pipe_1.SellerPipeNid(), new seller_pipe_1.SellerPipeEmail(), new seller_pipe_1.SellerPipeName()),
    __param(0, (0, common_1.Body)(new seller_pipe_1.SellerPipeNid(), new seller_pipe_1.SellerPipeEmail(), new seller_pipe_1.SellerPipeName())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seller_dto_1.SellerDTO]),
    __metadata("design:returntype", create_seller_dto_1.SellerDTO)
], SellerController.prototype, "inputSeller", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], SellerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('find/:nid'),
    __param(0, (0, common_1.Param)('nid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], SellerController.prototype, "getByNid", null);
__decorate([
    (0, common_1.Post)("uploadfile"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file", {
        fileFilter: (req, file, cb) => {
            if (file.originalname.match(/^.*\.(jpg|jpeg|png|pdf)$/)) {
                cb(null, true);
            }
            else {
                cb(new multer_1.MulterError("LIMIT_UNEXPECTED_FILE", "file"), false);
            }
        },
        limits: { fileSize: 2000000 },
        storage: (0, multer_1.diskStorage)({
            destination: "./uploads",
            filename: (req, file, cb) => {
                cb(null, Date.now() + "-" + file.originalname);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SellerController.prototype, "uploadNID", null);
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SellerController.prototype, "helloBookApi", null);
exports.SellerController = SellerController = __decorate([
    (0, common_1.Controller)("seller"),
    __metadata("design:paramtypes", [seller_service_1.SellerService])
], SellerController);
//# sourceMappingURL=seller.controller.js.map