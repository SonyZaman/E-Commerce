"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerMiddleware = void 0;
const common_1 = require("@nestjs/common");
let SellerMiddleware = class SellerMiddleware {
    use(req, res, next) {
        let protocol = req.protocol;
        let host = req.get("host");
        let url = req.originalUrl;
        let method = req.method;
        let date = new Date().toDateString();
        console.log(protocol + "://" + host + url + " " + method + " " + date);
        next();
    }
};
exports.SellerMiddleware = SellerMiddleware;
exports.SellerMiddleware = SellerMiddleware = __decorate([
    (0, common_1.Injectable)()
], SellerMiddleware);
//# sourceMappingURL=seller.middleware.js.map