import { Request, Response } from "express";
import { CalculateCommissionRequestDTO } from "../../application/dtos/CalculateCommissionRequestDTO";
import { CalculateCommissionUseCase } from "../../application/useCases/CalculateCommissionUseCase";

export class CommissionController {
  private useCase: CalculateCommissionUseCase;

  constructor() {
    this.useCase = new CalculateCommissionUseCase();
  }

  public calculate = (req: Request, res: Response): void => {
    try {
      const dto: CalculateCommissionRequestDTO = req.body;
      const result = this.useCase.execute(dto);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  };
}
