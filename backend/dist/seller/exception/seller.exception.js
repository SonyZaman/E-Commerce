"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellerExceptionNid = exports.SellerExceptionEmail = exports.SellerExceptionName = void 0;
const common_1 = require("@nestjs/common");
class SellerExceptionName extends common_1.HttpException {
    constructor(message = 'Name must only contain alphabetic characters') {
        super({ statusCode: common_1.HttpStatus.BAD_REQUEST, message }, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.SellerExceptionName = SellerExceptionName;
class SellerExceptionEmail extends common_1.HttpException {
    constructor(message = 'Mail must contain "@" and end with .xyz domain') {
        super({ statusCode: common_1.HttpStatus.BAD_REQUEST, message }, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.SellerExceptionEmail = SellerExceptionEmail;
class SellerExceptionNid extends common_1.HttpException {
    constructor(message = 'NID must be a number with at least 10 digits') {
        super({ statusCode: common_1.HttpStatus.BAD_REQUEST, message }, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.SellerExceptionNid = SellerExceptionNid;
//# sourceMappingURL=seller.exception.js.map