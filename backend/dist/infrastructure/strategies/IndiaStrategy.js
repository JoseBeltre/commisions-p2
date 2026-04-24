"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndiaStrategy = void 0;
class IndiaStrategy {
    calculate(sale) {
        return sale.netTotal * 0.10;
    }
}
exports.IndiaStrategy = IndiaStrategy;
