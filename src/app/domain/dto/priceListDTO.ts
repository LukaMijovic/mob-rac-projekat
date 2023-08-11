export class PriceListDTO {
  constructor(
    public id: number,
    public economy: number,
    public economyPlus: number,
    public preferredEconomy: number,
    public business: number,
    public firstClass: number
  ) {
  }
}
