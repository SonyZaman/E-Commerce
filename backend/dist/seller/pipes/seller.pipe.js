"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerPipeNid = exports.SellerPipeEmail = exports.SellerPipeName = void 0;
const common_1 = require("@nestjs/common");
const seller_exception_1 = require("../exception/seller.exception");
let SellerPipeName = class SellerPipeName {
    transform(value) {
        if (typeof value.name !== 'string' || !/^[A-Za-z]+$/.test(value.name)) {
            throw new seller_exception_1.SellerExceptionName();
        }
        return value;
    }
};
exports.SellerPipeName = SellerPipeName;
exports.SellerPipeName = SellerPipeName = __decorate([
    (0, common_1.Injectable)()
], SellerPipeName);
let SellerPipeEmail = class SellerPipeEmail {
    transform(value) {
        if (typeof value.email !== 'string' || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.xyz$/.test(value.email)) {
            throw new seller_exception_1.SellerExceptionEmail();
        }
        return value;
    }
};
exports.SellerPipeEmail = SellerPipeEmail;
exports.SellerPipeEmail = SellerPipeEmail = __decorate([
    (0, common_1.Injectable)()
], SellerPipeEmail);
let SellerPipeNid = class SellerPipeNid {
    transform(value) {
        if (typeof value.nid !== 'string' || !/^\d{10,}$/.test(value.nid)) {
            throw new seller_exception_1.SellerExceptionEmail();
        }
        return value;
    }
};
exports.SellerPipeNid = SellerPipeNid;
exports.SellerPipeNid = SellerPipeNid = __decorate([
    (0, common_1.Injectable)()
], SellerPipeNid);
//# sourceMappingURL=seller.pipe.js.map