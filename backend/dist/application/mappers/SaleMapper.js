"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleMapper = void 0;
const Sale_1 = require("../../domain/entities/Sale");
class SaleMapper {
    static toDomain(dto) {
        return new Sale_1.Sale(dto.country, dto.total, dto.discount);
    }
}
exports.SaleMapper = SaleMapper;
