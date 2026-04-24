"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateCommissionUseCase = void 0;
const SaleMapper_1 = require("../mappers/SaleMapper");
const CommissionCalculator_1 = require("../../domain/services/CommissionCalculator");
const IndiaStrategy_1 = require("../../infrastructure/strategies/IndiaStrategy");
const USStrategy_1 = require("../../infrastructure/strategies/USStrategy");
const UKStrategy_1 = require("../../infrastructure/strategies/UKStrategy");
class CalculateCommissionUseCase {
    execute(dto) {
        // 1. Map to Domain Entity
        const sale = SaleMapper_1.SaleMapper.toDomain(dto);
        // 2. Resolve Strategy
        let strategy;
        switch (sale.country.toUpperCase()) {
            case "INDIA":
                strategy = new IndiaStrategy_1.IndiaStrategy();
                break;
            case "US":
                strategy = new USStrategy_1.USStrategy();
                break;
            case "UK":
                strategy = new UKStrategy_1.UKStrategy();
                break;
            default:
                throw new Error("Unsupported country strategy.");
        }
        // 3. Process Logic
        const calculator = new CommissionCalculator_1.CommissionCalculator(strategy);
        const commission = calculator.calculate(sale);
        // 4. Return Data
        return {
            commission,
        };
    }
}
exports.CalculateCommissionUseCase = CalculateCommissionUseCase;
