import { SaleMapper } from "../mappers/SaleMapper";
import { CalculateCommissionRequestDTO } from "../dtos/CalculateCommissionRequestDTO";
import { CalculateCommissionResponseDTO } from "../dtos/CalculateCommissionResponseDTO";
import { CommissionCalculator } from "../../domain/services/CommissionCalculator";
import { CommissionStrategy } from "../../domain/interfaces/CommissionStrategy";
import { IndiaStrategy } from "../../infrastructure/strategies/IndiaStrategy";
import { USStrategy } from "../../infrastructure/strategies/USStrategy";
import { UKStrategy } from "../../infrastructure/strategies/UKStrategy";

export class CalculateCommissionUseCase {
  public execute(dto: CalculateCommissionRequestDTO): CalculateCommissionResponseDTO {
    // 1. Map to Domain Entity
    const sale = SaleMapper.toDomain(dto);

    // 2. Resolve Strategy
    let strategy: CommissionStrategy;
    switch (sale.country.toUpperCase()) {
      case "INDIA":
        strategy = new IndiaStrategy();
        break;
      case "US":
        strategy = new USStrategy();
        break;
      case "UK":
        strategy = new UKStrategy();
        break;
      default:
        throw new Error("Unsupported country strategy.");
    }

    // 3. Process Logic
    const calculator = new CommissionCalculator(strategy);
    const commission = calculator.calculate(sale);

    // 4. Return Data
    return {
      commission,
    };
  }
}
