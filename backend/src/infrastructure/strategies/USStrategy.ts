import { CommissionStrategy } from "../../domain/interfaces/CommissionStrategy";
import { Sale } from "../../domain/entities/Sale";

export class USStrategy implements CommissionStrategy {
  public calculate(sale: Sale): number {
    return sale.netTotal * 0.15;
  }
}
