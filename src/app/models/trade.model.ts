export class Trade {
  constructor(
    public date: Date,
    public stockName: string,
    public tradeType: string,
    public sellPrice: number,
    public buyPrice: number,
    public qty: number,
    public sellMargin: number,
    public buyMargin: number,
    public grossPl: number,
    public brokerage: number,
    public charges: number,
    public netPl: number,
    public notes: string
  ) {}
}
