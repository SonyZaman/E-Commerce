"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerPipe = void 0;
const common_1 = require("@nestjs/common");
let SellerPipe = class SellerPipe {
    transform(value, metadata) {
        if (typeof value.name !== 'string' || !/^[A-Za-z]{3}$/.test(value.name)) {
            throw new common_1.BadRequestException('Name must be exactly 3 alphabetic characters');
        }
        return value;
    }
};
exports.SellerPipe = SellerPipe;
exports.SellerPipe = SellerPipe = __decorate([
    (0, common_1.Injectable)()
], SellerPipe);
//# sourceMappingURL=seller.pipe.js.map