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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerDTO = void 0;
const class_validator_1 = require("class-validator");
class SellerDTO {
    name;
    email;
    nid;
}
exports.SellerDTO = SellerDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^[A-Za-z\s]+$/, { message: 'Name must only contain alphabets' }),
    __metadata("design:type", String)
], SellerDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Email must be valid and contain @ character' }),
    (0, class_validator_1.Matches)(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.xyz$/, { message: 'Email must end with .xyz domain' }),
    __metadata("design:type", String)
], SellerDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{10,17}$/, { message: 'NID must be a number with 10 to 17 digits' }),
    __metadata("design:type", String)
], SellerDTO.prototype, "nid", void 0);
//# sourceMappingURL=create-seller.dto.js.map