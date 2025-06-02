export interface IFormatMoneyHook {
  exec(money: number): string;
}

export class FormatMoneyBRLHook implements IFormatMoneyHook {
  exec(money: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(money);
  }
}
