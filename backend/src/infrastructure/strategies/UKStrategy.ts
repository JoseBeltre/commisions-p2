import { CommissionStrategy } from "../../domain/interfaces/CommissionStrategy";
import { Sale } from "../../domain/entities/Sale";

export class UKStrategy implements CommissionStrategy {
  public calculate(sale: Sale): number {
    return sale.netTotal * 0.12;
  }
}
