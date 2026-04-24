import { Sale } from "../entities/Sale";

export interface CommissionStrategy {
  calculate(sale: Sale): number;
}
