import { Sale } from "../entities/Sale";
import { CommissionStrategy } from "../interfaces/CommissionStrategy";

export class CommissionCalculator {
  constructor(private strategy: CommissionStrategy) {}

  public calculate(sale: Sale): number {
    return this.strategy.calculate(sale);
  }
}
