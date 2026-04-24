"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale = void 0;
class Sale {
    country;
    total;
    discount;
    constructor(country, total, discount) {
        this.country = country;
        this.total = total;
        this.discount = discount;
        this.validate();
    }
    validate() {
        if (this.total < 0) {
            throw new Error("Total must be greater than or equal to 0.");
        }
        if (this.discount < 0) {
            throw new Error("Discount must be greater than or equal to 0.");
        }
        if (this.discount > this.total) {
            throw new Error("Discount cannot be greater than the total.");
        }
        if (!["INDIA", "US", "UK"].includes(this.country.toUpperCase())) {
            throw new Error("Invalid country. Supported countries: INDIA, US, UK.");
        }
    }
    get netTotal() {
        return this.total - this.discount;
    }
}
exports.Sale = Sale;
