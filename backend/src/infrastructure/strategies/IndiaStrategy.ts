import { CommissionStrategy } from "../../domain/interfaces/CommissionStrategy";
import { Sale } from "../../domain/entities/Sale";

export class IndiaStrategy implements CommissionStrategy {
  public calculate(sale: Sale): number {
    return sale.netTotal * 0.10;
  }
}
