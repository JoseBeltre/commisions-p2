"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionCalculator = void 0;
class CommissionCalculator {
    strategy;
    constructor(strategy) {
        this.strategy = strategy;
    }
    calculate(sale) {
        return this.strategy.calculate(sale);
    }
}
exports.CommissionCalculator = CommissionCalculator;
