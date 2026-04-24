"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UKStrategy = void 0;
class UKStrategy {
    calculate(sale) {
        return sale.netTotal * 0.12;
    }
}
exports.UKStrategy = UKStrategy;
