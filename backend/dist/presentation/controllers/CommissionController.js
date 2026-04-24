"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionController = void 0;
const CalculateCommissionUseCase_1 = require("../../application/useCases/CalculateCommissionUseCase");
class CommissionController {
    useCase;
    constructor() {
        this.useCase = new CalculateCommissionUseCase_1.CalculateCommissionUseCase();
    }
    calculate = (req, res) => {
        try {
            const dto = req.body;
            const result = this.useCase.execute(dto);
            res.status(200).json(result);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    };
}
exports.CommissionController = CommissionController;
