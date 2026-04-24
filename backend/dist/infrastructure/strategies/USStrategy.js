"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USStrategy = void 0;
class USStrategy {
    calculate(sale) {
        return sale.netTotal * 0.15;
    }
}
exports.USStrategy = USStrategy;
