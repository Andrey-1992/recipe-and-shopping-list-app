export class Ingredient {
  // This approach works the base figure
  // public name: string;
  // public amount: string;

  // constructor(name: string, amount: string) {
  //   this.name = name;
  //   this.amount = amount;
  // }

  //TypeScript offers an oppotunity to create by defaul objects:
  constructor(public name: any, public amount: any) {}

}