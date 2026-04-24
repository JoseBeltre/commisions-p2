export interface CalculateCommissionRequestDTO {
  country: string;
  total: number;
  discount: number;
}

export interface CalculateCommissionResponseDTO {
  commission: number;
}
