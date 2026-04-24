import { Sale } from "../../domain/entities/Sale";
import { CalculateCommissionRequestDTO } from "../dtos/CalculateCommissionRequestDTO";

export class SaleMapper {
  public static toDomain(dto: CalculateCommissionRequestDTO): Sale {
    return new Sale(dto.country, dto.total, dto.discount);
  }
}
