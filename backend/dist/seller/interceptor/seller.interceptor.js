"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let SellerInterceptor = class SellerInterceptor {
    intercept(context, next) {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        request.body.name = 'Face wash';
        request.body.category = "Skin care";
        return next.handle().pipe((0, operators_1.map)((data) => {
            data = "from interceptor";
            return data;
        }));
    }
};
exports.SellerInterceptor = SellerInterceptor;
exports.SellerInterceptor = SellerInterceptor = __decorate([
    (0, common_1.Injectable)()
], SellerInterceptor);
//# sourceMappingURL=seller.interceptor.js.map