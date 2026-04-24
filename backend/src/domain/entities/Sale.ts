export class Sale {
  constructor(
    public readonly country: string,
    public readonly total: number,
    public readonly discount: number
  ) {
    this.validate();
  }

  private validate(): void {
    if (this.total < 0) {
      throw new Error("El total debe ser mayor o igual a 0.");
    }
    if (this.discount < 0) {
      throw new Error("El descuento debe ser mayor o igual a 0.");
    }
    if (this.discount > this.total) {
      throw new Error("El descuento no puede ser mayor al total.");
    }
    if (!["INDIA", "US", "UK"].includes(this.country.toUpperCase())) {
      throw new Error("País inválido. Países soportados: INDIA, US, UK.");
    }
  }

  get netTotal(): number {
    return this.total - this.discount;
  }
}
